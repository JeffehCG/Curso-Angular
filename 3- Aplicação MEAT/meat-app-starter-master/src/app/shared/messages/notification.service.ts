//Serviço para o componente de notificação ser usado por outros componetes
import { EventEmitter } from "@angular/core";

export class NotificationService{
    notifier = new EventEmitter<any>() //Atributo que é um evento, que sera disparado quando for passado uma mensagem

    notify(message: string){ 
        this.notifier.emit(message) //disparando o evento mensagem, quando for passado para para o serviço (assim passando um observable para o componente snackbar)
    }
}