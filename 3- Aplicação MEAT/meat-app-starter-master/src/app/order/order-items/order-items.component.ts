import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[] //Recebendo os itens do pedido pelo componente order

  //Output - enviar dados para outro componente
  @Output() increaseQty = new EventEmitter<CartItem>() //Almentando a quantidade do item
  @Output() decreaseQty = new EventEmitter<CartItem>() //Diminuindo a quantidade do item
  @Output() remove = new EventEmitter<CartItem>() //Removendo o item

  constructor() { }

  ngOnInit() {
  }

  //Metodo para aumentar quantidade do item
  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }

  //Metodo para diminuir a quantidade do item
  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  //Metodo para remover o item
  emitRemove(item: CartItem){
    this.remove.emit(item)
  }

}
