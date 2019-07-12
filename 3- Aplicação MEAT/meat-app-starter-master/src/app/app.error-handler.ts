//Tratamentos de erros
import {HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'

export class ErrorHandler{ //Metodo que ira receber o erro, e tratalo (possivelmente um response do http)
    static handleError(error: HttpErrorResponse | any){
        let errorMessage: string

        if(error instanceof HttpErrorResponse){ //Se o erro for instancia de um response tratalo da maneira abaixo
            const body = error.error
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''}${body}`

        }else{ // se não, exibir o erro
            errorMessage = error.message ? error.message : error.toString()
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}