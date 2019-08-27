// Arquivo de rotas
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},//Rota padrão
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [ //Rotas filhas
            {path: '', redirectTo: 'menu', pathMatch: 'full'}, //Filho padrão
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]}, //Rota com parametros
    {path: 'restaurants', component: RestaurantsComponent},
    // Esta rota esta Carregando o modulo de pagamento(loadChildrem- chama modulos separados do componente pricipal tardiamente (lazy-loading))
    {path: 'order', loadChildren: "./order/order.module#OrderModule",
        canLoad: [LoggedInGuard], //O modulo de pagamento só sera carregado se atender as condições do CanLoad dentro de LoggedinGuard (Que no caso é estar logado)
        canActivate: [LoggedInGuard] //Após o modulo ser carregado, toda vez que ele for acessado deverar atender as condições do CanActivate dentro de LoggedinGuard
    },
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'}, 
    {path: '**', component: NotFoundComponent}, //Rota quando usuario digita uma rota inexistente //Ela tem que ficar no final

]