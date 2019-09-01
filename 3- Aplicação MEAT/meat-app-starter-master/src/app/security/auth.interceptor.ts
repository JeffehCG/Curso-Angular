//Classe para interceptar requisições do HttpClient
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private injector: Injector //Injector é referencia para o mecanismo de dependencia do angular ( atraves dele pode obter qualquer objeto dentro do conteniner de dependencia) 
        ){}
    
    //request - é a requisição que sera modificada (adicionando um header, modificando algo etc...)
    //next - representa o proximo intercept a ser executado ou a chamada final para finalmente efetuar a requisição para o backend
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const loginService = this.injector.get(LoginService)//Pegando a referencia de LoginService e suas dependencias pelo Injector

        //Se o usuario estiver logado, sera passado dentro do Header o token de Authorization, para efetuar o pedido de compra
        if(loginService.isLoggedIn()){
            
            //A requisição é imutavel - por tando antes de modifica-la é preciso clona-la
            const authRequest = request.clone({
                setHeaders:{'Authorization': `Bearer ${loginService.user.accessToken}`} //Adicionando Header na requisição clonada
            })
            return next.handle(authRequest) //Retornando requisição alterada
        }else{
            return next.handle(request) //Chamando o proximo intercept, ou efetuar a requisição caso seja o ultimo intercept
        }

    }
}