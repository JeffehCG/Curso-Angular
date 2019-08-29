//Modulo shared (Para compartilhar com outros modulos)
//Modulo não referenciado em app.modulo.ts, que é carregado aparte
import { NgModule, ModuleWithProviders } from "@angular/core";

//Dependencias que precisam ser importadas
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

//Componentes que seram compartilhados com outros modulos
import { InputComponent } from './input/input.component'
import { RadioComponent} from './radio/radio.component'
import { RatingComponent} from './rating/rating.component'
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

//Providers
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { OrderService } from 'app/order/order.service';
import { NotificationService } from "./messages/notification.service";
import { LoginService } from "app/security/login/login.service";
import { LoggedInGuard } from "app/security/loggedin.guard";
import { LeaveOrderGuard } from "app/order/leave-order.guard";

//HtppIntercptor - Intercepta requisições http
import { HTTP_INTERCEPTORS } from "@angular/common/http"; //Token que deve ser referenciado no intercpt
import { AuthInterceptor } from "app/security/auth.interceptor";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent], //Declarando componentes desse modulo
    imports: [FormsModule, ReactiveFormsModule, CommonModule], //Importando dependencias desse modulo
    exports: [InputComponent, RadioComponent, RatingComponent,SnackbarComponent, //Definindo componentes desse modulo que seram compartilhados para outros modulos
            FormsModule, ReactiveFormsModule, CommonModule] //Definindo dependencias que seram compatilhadas com outros modulos(assim os outros modulos não precisaram importar essas dependencias)
})
export class SharedModule{

    //Exportando os serviços
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [
                ShoppingCartService, 
                RestaurantsService, 
                OrderService, 
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true} //Intercept
            ]
        }
    }
}