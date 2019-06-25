import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core'; //Local ID - esta sendo usado para converter moeda brasileira
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Importando modulo de rotas
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ItemRestaurantComponent } from './restaurants/item-restaurant/item-restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

import { RestaurantsService } from './restaurants/restaurants.service'; //Importando serviço, para que o angular saiba da existencia dele
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    ItemRestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) //Passando array de rotas importadas, para efetuar a mudança de pagina
  ],
  providers: [RestaurantsService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}], //Declarando serviço, para poder ser injetado pelo angular, e para utilizar valores na moeda brasileira
  bootstrap: [AppComponent]
})
export class AppModule { }
