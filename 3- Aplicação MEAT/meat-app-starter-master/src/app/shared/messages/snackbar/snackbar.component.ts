import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { NotificationService } from '../notification.service';

import { Observable, timer} from 'rxjs'
import {tap, switchMap} from 'rxjs/operators'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [ //Array Animações
    //Animações são definidas em trigger
    trigger('snack-visibility', [ //Array de estados da animação
      state('hidden', style({ //estilo css do estado
        opacity: 0,
        bottom: "0px"
      })),
      state('visible', style({
        opacity: 1,
        bottom: "30px"
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')), //transição de um estado para o outro, e tempo de mudança (ease-in = começa rapido no começo)
      transition('visible => hidden', animate('500ms 0s ease-out')) //ease-out = mais rapido no final
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Helo there!'

  snackVisibility: string = 'hidden' //Atributo definindo o stado inicial da animação

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier //Quando for enviada uma mensagem pelo serviço sera disparada essa função
      .pipe(//Pipe é Utilizado para chamar operadores (filter, tap, map etc...)
        tap(message=>{ //tap recebe o parametro passado, e faz algo com ele antes do subscrib
          this.message = message
          this.snackVisibility = 'visible'
        }),
        //Timer, depois de 3 segundos ele volta para hidden, assim escondendo o snackBar
        switchMap(message => timer(3000)) //switchmap troca o observable quando são chamados varios em seguida, ou seja, o timer ira ser zerado 
      )
      .subscribe(timer=> this.snackVisibility = "hidden")
  }

}
