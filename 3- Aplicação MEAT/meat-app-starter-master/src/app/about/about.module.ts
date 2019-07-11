//Modulo about
//Separando a aplicação em modulos, para carregar apenas um quando necessario
//Esse modulo não é referenciado no app.module.ts (Modulo principal) //apenas definido de maneira diferente no app.route.ts

import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router"

import { AboutComponent } from './about.component'

//Como about é um modulo aparte, é preciso definir as rotas dentro dele, e a rota principal
const ROUTES: Routes =[
    {path: '', component: AboutComponent}
]

@NgModule({
    declarations: [AboutComponent],
    imports: [ RouterModule.forChild(ROUTES)] //Importando as rotas para serem usadas
})
export class AboutModule {

}