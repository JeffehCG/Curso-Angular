//Serviço de compras
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService{
    items: CartItem [] = []//Coleção de items do carrinho

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
    }

    //Somar total do carrinho
    total(): number{
        return this.items
            .map(item => item.value()) //Percorendo todos valores de cada item (metodo value multiplica valor pela quantidade)
            .reduce((prev, value) => prev+value, 0) //Somando cada valor (0 é o valor inicial)
    }
}