//Classes para o pagamento
//Dados da compra
class Order{
    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = [], //Na compra tera um array de itens
        public id?: string
    ){}
}

//Items da compra, é enviado para o back apenas a quantidade e o id do item
class OrderItem{
    constructor(public quantity: number, public menuId: string){}
}

export {Order, OrderItem}