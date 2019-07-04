import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService{
    constructor(private cartService: ShoppingCartService){}

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
}