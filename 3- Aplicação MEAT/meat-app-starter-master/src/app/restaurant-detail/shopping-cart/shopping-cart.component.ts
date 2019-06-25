import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service'; //Serviço de comunicação com backend

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

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
