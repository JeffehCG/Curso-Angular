import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })

    //Pegando caminho a ser navegado após efetuar o login
    //Esse caminho é passado em loggedin.guard pelo metodo hadleLogin() de login.service
    //Esse pagametro é pego atravez do proprio Router (Quando é passado para redirecionar para o login tambem é passado o caminho proximo a ser redirecionado)
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  //Metodo para efetuar login
  login(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        user => {this.notificationService.notify(`Bem vindo, ${user.name}`)},
        error => {this.notificationService.notify(error.error.message)},
        //O terceiro metodo do subscribe é executado apos a finalização do Observable
        () => {this.router.navigate([atob(this.navigateTo)])} // atob - decodifica o caminho que foi codificado em btoa //Navegando para proxima pagina apos efetuar o login
      )
  }

}
