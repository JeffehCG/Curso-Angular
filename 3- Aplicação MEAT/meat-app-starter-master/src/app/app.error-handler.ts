//Tratamentos de erros
import {HttpErrorResponse} from '@angular/common/http'
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NotificationService } from './shared/messages/notification.service';
import { LoginService } from './security/login/login.service';

@Injectable() //Interface ErrorHandler (Padrão de tratamento de erros do angular)
export class ApplicationErrorHandler extends ErrorHandler{ //Metodo que ira receber o erro, e tratalo (possivelmente um response do http)
    
    constructor(
        private ns: NotificationService, //Serviço de exibição de notificação para o usuario
        private injector: Injector, //Injector é referencia para o mecanismo de dependencia do angular ( atraves dele pode obter qualquer objeto dentro do conteniner de dependencia) 
        private zone: NgZone //O errorHandler é executado fora da zona do angular, assim muitas vezes ele não consegue alterar atributos na tela para o usuario
                            //(então o NgZone é usado para garantir a execução do errorHandler dentro de uma zona, para ele ser monitorado pelo angular, e assim atualizando o que é preciso após a execução)
                            //O NgZone tambem pode ser executado para garantir que bibliotecas javascript externas sejam executadas em uma zona
    ){
        super() //Nesse caso é preciso chamar o super() , pois a Interface ErrorHandler ja tem um construtor padrão
    }

    //Metodo para tratar erros
    handleError(errorResponse: HttpErrorResponse | any){
        if(errorResponse instanceof HttpErrorResponse){ //Se o erro for instancia de um response tratalo da maneira abaixo
            const message = errorResponse.error.message //Pegando a mensagem do erro

            //Garantindo que o codigo abaixo sera executado em uma zona do angular
            this.zone.run(()=>{
                switch(errorResponse.status){ //Tratando os status de erro da requisição
                    case 401:
                        //Redirecionando para a pagina de login
                        this.injector.get(LoginService).hadleLogin() //Pegando a referencia de LoginService e suas dependencias pelo Injector
                    break;
                    case 403:
                        this.ns.notify(message || 'Não autorizado.') //Exibindo a notificação para o usuario
                    break;
                    case 404:
                        this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes')
                    break;
                }
            })
        }
        super.handleError(errorResponse) //Exibindo erro no console
    }

}

// Metodo tratamento de erro ( primeiro exemplo)
// static handleError(error: HttpErrorResponse | any){
//     let errorMessage: string

//     if(error instanceof HttpErrorResponse){ //Se o erro for instancia de um response tratalo da maneira abaixo
//         const body = error.error
//         errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''}${body}`

//     }else{ // se não, exibir o erro
//         errorMessage = error.message ? error.message : error.toString()
//     }

//     console.log(errorMessage)
//     return Observable.throw(errorMessage)
// }