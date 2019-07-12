// Arquivo de rotas
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},//Rota padrão
    {path: 'about', loadChildren: './about/about.module#AboutModule'}, //Essa rota esta chamando o modulo About, (loadChildrem- chama modulos separados do componente pricipal tardiamente (lazy-loading))
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [ //Rotas filhas
            {path: '', redirectTo: 'menu', pathMatch: 'full'}, //Filho padrão
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]}, //Rota com parametros
    {path: 'order', loadChildren: "./order/order.module#OrderModule"}, //Carregando o modulo de pagamento
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: '**', component: NotFoundComponent}, //Rota quando usuario digita uma rota inexistente //Ela tem que ficar no final

]