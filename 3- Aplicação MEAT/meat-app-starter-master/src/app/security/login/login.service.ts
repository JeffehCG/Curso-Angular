//Serviços para efetuar login
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'

import {MEAT_API} from '../../app.api'
import { User } from "./user.model";
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class LoginService{

    user:User
    lastUrl: string

    constructor(private http:HttpClient, private router: Router){

        //Pegando a URL da pagina que o usuario esta acessando (Para o usuario ser redirecionada para mesma apos efetuar o login)
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event:NavigationEnd) => this.lastUrl = event.url)
    }

    isLoggedIn() : boolean{
        return this.user !== undefined
    }

    //Metodo para efetuar o login, retornando assim o token
    login(email: string, password: string) : Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, 
                {email: email, password: password})
            .do( user => this.user = user) //Salvando usuario em memoria
    }

    //Metodo para redirecionar para tela de login
    //path é o caminha que sera aberto após efetuar o login
    hadleLogin(path: string = this.lastUrl){ //Passando a ultima URL acessada por padrão
        this.router.navigate(['/login', btoa(path)]) //btoa - codificando a url, para aparecer melhor para o usuario
    }

    //Metodo para desconectar usuario
    logout(){
        this.user = undefined
    }

}