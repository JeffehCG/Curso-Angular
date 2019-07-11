//Serviço de compras
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from 'app/shared/messages/notification.service';

@Injectable() //Todo serviço que recebe algo é marcado com injectable (notification)
export class ShoppingCartService{
    items: CartItem [] = []//Coleção de items do carrinho

    constructor(private notificationService: NotificationService){}

    //Limpar carrinho
    clear(){
        this.items = []
    }

    //Adicionar item ao carrinho
    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id) //Metodo que verifica se o item ja esta no carrinho
        if(foundItem){
            this.increaseQty(foundItem) //Aumentando a quantidade
        }else{
            this.items.push(new CartItem(item)) //Adicionando item ao carrinho
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`) //Exibindo a notificação (snackBar)
    }

    //Aumentando quantidade
    increaseQty(item:CartItem){
        item.quantity = item.quantity + 1
    }

    //Diminuindo quantidade
    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }

    //Remover item do carrinho
    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item),1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`) //Exibindo a notificação (snackBar)
    }

    //Somar total do carrinho
    total(): number{
        return this.items
            .map(item => item.value()) //Percorendo todos valores de cada item (metodo value multiplica valor pela quantidade)
            .reduce((prev, value) => prev+value, 0) //Somando cada valor (0 é o valor inicial)
    }
}