//Modulo de referencia dos serviços -- Não esta sendo usado, por os providers estão sendo referenciados no CoreModule
import { NgModule} from '@angular/core'

//providers
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { OrderService } from 'app/order/order.service';

@NgModule({
    providers:[ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule{}