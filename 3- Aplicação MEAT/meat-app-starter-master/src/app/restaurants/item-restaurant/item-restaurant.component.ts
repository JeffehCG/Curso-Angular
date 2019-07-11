import { Component, OnInit, Input} from '@angular/core'; //Necessario peger o decorate Input, para que outros componentes possão passar dados para esse
import {trigger, state, style, transition, animate} from '@angular/animations'

//Importando Interface
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-item-restaurant',
  templateUrl: './item-restaurant.component.html',
  animations: [//Animações
    //Animação de entrada na pagina
    trigger('restaurantAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [ // Void representa quando não esta na aba, ou seja, essa animação sera aplicada quando for entrada na pagina (tambem é possivel aplicar na saida (ready => void))
        style({opacity: 0, transform: 'translate(-30px, -10px)'}), //Aplicando estilo na transição
        animate('500ms 0s ease-in-out')
      ]) 
    ])
  ]
})
export class ItemRestaurantComponent implements OnInit {

  restaurantState = 'ready'

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
