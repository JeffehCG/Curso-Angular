import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";

//Metodos de segurança do login

//Diferença CanLoad e CanActivate 
//CanLoad - Tratamentos antes de carregar o modulo
//CanActivate - Tratamentos com o modulo ja carregado, efetuado toda vez que entrar no mesmo

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{

    constructor(private loginService: LoginService){}

    //Metodo para verificar se o usuario esta autenticado
    checkAuthentication(path: string): boolean{
        //Verificando se o usuario esta logado
        const loggedIn = this.loginService.isLoggedIn()
        if(!loggedIn){ //Se não estiver logado chamar metodo para redirecionar para tela de login
           this.loginService.hadleLogin(`/${path}`) //Passando rota para ser navegada após o login
        }

        return loggedIn //Se o usuario estiver logado sera retorando True, assim liberando o carregamento do modulo
    }

    //Metodo de CanLoad
    //Associado com rotas LoadChildrem (Decidindo se o modulo carregado de maneira tardia, sera mesmo carregado levando alguma condição em questão)
    canLoad(route: Route) : boolean {
        return this.checkAuthentication(route.path)
    }

    //Metodo de CanActivate
    //ActivatedRouteSnapshot - Representa a rota ativada (Atual)
    //RouterStateSnapshot - Arvore de Rotas (Todas rotas que foram acessadas antes da rota ativada)
    canActivate(activatedRoute: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean{
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }
}