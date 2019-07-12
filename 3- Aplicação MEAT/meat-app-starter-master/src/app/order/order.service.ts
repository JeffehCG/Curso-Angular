import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map'
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService{
    constructor(private cartService: ShoppingCartService, private http: HttpClient){}

    //Pegando o valor total dos itens no carrinho
    itemsValue(): number{
        return this.cartService.total()
    }

    //Listando itens do carrinho
    cartItems() : CartItem[]{
        return this.cartService.items
    }

    //Aumentando quantidade do carrinho
    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    //Diminuindo quantidade do carrinho
    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    //Removendo item
    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    //Limpando a compra
    clear(){
        this.cartService.clear()
    }

    //Efetuando pagamento
    checkOrder(order: Order): Observable<string>{
        return this.http.post<Order>(`${MEAT_API}/orders`,order)
                        .map(order => order.id) //Retornando o ID da compra
    }

    // //Efetuando pagamento (Versão 4.0.0 para baixo do angular)
    // checkOrder(order: Order): Observable<string>{
    //     const headers = new Headers() //Tipo dos dados enviados para a API
    //     headers.append('Content-Type', 'application/json')
    //     return this.http.post(`${MEAT_API}/orders`, 
    //                             JSON.stringify(order),
    //                             new RequestOptions({headers:headers}))
    //                     .map(respose => respose.json()) //Retornando resposta
    //                     .map(order => order.id) //Retornando o ID da compra
    // }
}