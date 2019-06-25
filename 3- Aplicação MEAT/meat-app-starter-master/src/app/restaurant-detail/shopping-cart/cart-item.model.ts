//Modelo dos itens no carrinho
import { MenuItem } from '../menu-item/menu-item.model'; //Modelo do item do menu

export class CartItem{
    constructor(public menuItem: MenuItem, public quantity: number = 1){}

    value(): number{
        return this.menuItem.price * this.quantity
    }
}