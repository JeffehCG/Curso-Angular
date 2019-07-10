import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import {Router} from '@angular/router'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8 //Valor do frete

  paymentOptions: RadioOption[] = [ // Opções de pagamento, que não passados para o componente radio
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REF'}
  ]

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  //Metodo para pegar o valor total dos itens
  itemsValues(): number {
    return this.orderService.itemsValue()
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

  //Metodo para efetuar pagamento
  checkOrder(order: Order){
    order.orderItems = this.cartItems().map((item: CartItem)=> new OrderItem(item.quantity, item.menuItem.id)) //Pegando cada item do carrinho, e transformando em OrdemItem para o pagamento
    this.orderService.checkOrder(order) //Serviço para mandar para o back
      .subscribe(
        (orderId: string)=>{
          this.router.navigate(['/order-summary']) //Navegando para pagina de sucesso
          this.orderService.clear() //Limpar itens do pedido
        },
        ()=>{}
      )
}

}
