//Tratamentos de erros
import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';

export class ErrorHandler{ //Metodo que ira receber o erro, e tratalo (possivelmente um response do http)
    static handleError(error: Response | any){
        let errorMessage: string

        if(error instanceof Response){ //Se o erro for instancia de um response tratalo da maneira abaixo
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`

        }else{ // se não, exibir o erro
            errorMessage = error.toString()
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}