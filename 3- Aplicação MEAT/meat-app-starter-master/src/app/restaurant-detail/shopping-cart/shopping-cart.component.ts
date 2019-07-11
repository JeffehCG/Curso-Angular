import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service'; //Serviço de comunicação com backend
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [ //Animações
    trigger('row', [
      state('ready', style({opacity: 1})),
      //Adicionando item ao carrinho
      transition('void => ready', animate('500ms 0s ease-in', keyframes([ //Em keyframes você consegue definir animações mais complexas
        style({opacity: 0, transform: 'translateX(-30px)', offset:0}), //offset define o periodo da animação, onde 1 = 100%
        style({opacity: 0.8, transform: 'translateX(10px)', offset:0.8}), //Dessa maneira quando estiver em 80% sera executado o segundo style
        style({opacity: 1, transform: 'translateX(0px)', offset:1}),
      ]))),
      //Removendo item do carrinho
      transition('ready => void', animate('300ms 0s ease-out', keyframes([ 
        style({opacity: 1, transform: 'translateX(0px)', offset:0}), 
        style({opacity: 0.8, transform: 'translateX(-10px)', offset:0.2}), 
        style({opacity: 0, transform: 'translateX(30px)', offset:1}),
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  //Exibindo os itens do carrinho
  items(){
    return this.shoppingCartService.items;
  }

  //Exibindo o total do carrinho
  total():number{
    return this.shoppingCartService.total()
  }

  //Limpar carrinho
  clear(){
    this.shoppingCartService.clear()
  }

  //Removendo item do carrinho
  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  //Adicionando item ao carrinho
  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }
}
