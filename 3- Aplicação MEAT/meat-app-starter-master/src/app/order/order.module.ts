//Modulo da compra, separado do modulo principal (app.module.ts) (Feature module)
//Carregado apenas quando é chamado
import { NgModule} from "@angular/core"

//Componentes do modulo
import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";

//Dependecias
import { SharedModule } from "app/shared/shared.module";
import { RouterModule, Routes} from "@angular/router"

//Rotas desse modulo
const ROUTES: Routes = [
    {path: '', component: OrderComponent}, //Rota padrão
]

@NgModule({
    declarations:[OrderComponent, OrderItemsComponent, DeliveryCostsComponent], //Componentes
    imports: [SharedModule, RouterModule.forChild(ROUTES)], //Dependecias (Dentro de SharedModulo ja esta sendo exportado algumas dependencias, então não é preciso importar de novo nesse modulo)
    //Nesse modulo não é preciso ter exports que nem no modulo shared, pois ele não sera usuado dentro de nenhum outro modulo, assim não precisando exportar suas dependencias
})
export class OrderModule{}