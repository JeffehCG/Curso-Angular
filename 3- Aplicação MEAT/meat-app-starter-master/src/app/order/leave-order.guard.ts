//Serviço para confirmar com o usuario, se ele tem certeza de sair sem efetuar o pedido, pois os dados de endereço não seram salvos
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

//A interface CanDeactivate espera um tipo generico, que é o componente que sera associado com esse guard (Nesse caso o OrderComponent)
export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{
    
    //Metodo de CanDeactivate
    //ActivatedRouteSnapshot - Representa a rota ativada (Atual)
    //RouterStateSnapshot - Arvore de Rotas (Todas rotas que foram acessadas antes da rota ativada)
    canDeactivate(orderComponent: OrderComponent, activatedRoute: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean{
        if(!orderComponent.isOrderCompleted()){
            return window.confirm('Deseja desistir da compra?')
        }else{
           return true 
        }
    }
}

//O metodo CanDeactivate deve ser associado a rota que contenha o componente (nesse caso em order.module)