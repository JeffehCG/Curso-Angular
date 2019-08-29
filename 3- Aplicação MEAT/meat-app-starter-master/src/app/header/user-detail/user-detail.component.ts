//Componente do header para redirecionar para tela de login, caso o usuario não esteja logado
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/security/login/login.service';
import { User } from 'app/security/login/user.model';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  //Pegando o usuario logado
  user(): User{
    return this.loginService.user
  }

  //Verificando se o usuario esta logado
  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  //Metodo para redirecionar para tela de login
  login(){
    this.loginService.hadleLogin()
  }

  //Metodo para desconectar usuario
  logout(){
    this.loginService.logout()
  }

}
