import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [ // Opções de pagamento, que não passados para o componente radio
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  //Pegando itens do carrinho
  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  //Aumentando quantidade
  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  //Diminuindo quantidade
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  //Removendo item
  remove(item:CartItem){
    this.orderService.remove(item)
  }

}
