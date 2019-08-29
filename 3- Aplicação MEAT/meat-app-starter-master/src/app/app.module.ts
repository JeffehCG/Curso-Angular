import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core'; //Local ID - esta sendo usado para converter moeda brasileira
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; //Modulos de formularios
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LocationStrategy, HashLocationStrategy} from '@angular/common'

//Importando modulo de rotas
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ItemRestaurantComponent } from './restaurants/item-restaurant/item-restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component'; 

//Modulos
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'; //Modulo separado
//Os providers estão sendo exportado em SharedModule.forRoot(), assim não precisando usar o CoreModule
// import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    ItemRestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserAnimationsModule, //Modulo de animação
    BrowserModule,
    HttpClientModule,
    FormsModule, //Import para usar modulo de formularios
    ReactiveFormsModule, //Para usar o Formgroup
    SharedModule.forRoot(), //Importando o modulo separado, para usar os componentes (InputComponent, RadioComponent, RatingComponent)
    // CoreModule //Modulo de serviços
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}), //Passando array de rotas importadas, para efetuar a mudança de pagina
    //O PreloadAllModules carrega todos os modulos secundarios em segundo plano,
    //Assim exibindo o modulo principal para o usuario, e por traz carregando os outros,
    //Evitando lentidando no carregamento
  ],
  providers: [{provide: LocationStrategy, useClass:HashLocationStrategy}, //Usando estrategia de hash na navegação, para evitar problema de rota não encontrada no ambiente de produção
              {provide: LOCALE_ID, useValue: 'pt-BR'}], //Declarando serviço, para poder ser injetado pelo angular, e para utilizar valores na moeda brasileira
  bootstrap: [AppComponent]
})
export class AppModule { }
