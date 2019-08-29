import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import {Router} from '@angular/router'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import 'rxjs/add/operator/do'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //Validadores
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  orderForm: FormGroup //Controle do formulario da pagina(value, validação etc)

  delivery: number = 8 //Valor do frete

  orderId: string

  paymentOptions: RadioOption[] = [ // Opções de pagamento, que não passados para o componente radio
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REF'}
  ]

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //Controle de formulario
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]), //Validators é um componente de validação do formGroup
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]), //Em pattern é passado um regex
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo}) //Passando validador personalizado
  }

  //Validação personalizada, confirmação de email
  static equalsTo(group: AbstractControl): {[key:string] : boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch: true} //Passando a chave para mostrar que os emails não são iguais
    }
    return undefined
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

  //Metodo usado pelo CanDeactivate(leave-order.guard.ts) para verificar se o pedido foi finalizado
  isOrderCompleted(): boolean{
    return this.orderId !== undefined
  }

  //Metodo para efetuar pagamento
  checkOrder(order: Order){
    order.orderItems = this.cartItems().map((item: CartItem)=> new OrderItem(item.quantity, item.menuItem.id)) //Pegando cada item do carrinho, e transformando em OrdemItem para o pagamento
    this.orderService.checkOrder(order) //Serviço para mandar para o back
      .do((orderId: string) => {
        this.orderId = orderId  //Setando o orderId para identificar que o pedido foi concluido
      })
      .subscribe(
        (orderId: string)=>{
          this.router.navigate(['/order-summary']) //Navegando para pagina de sucesso
          this.orderService.clear() //Limpar itens do pedido
        },
        ()=>{}
      )
}

}
