import { Component, OnInit } from '@angular/core';
import { Restaurant } from './item-restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service'; //Importando serviço que se comunica com o banco
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap' //Substitui o observable
import 'rxjs/add/operator/do' //Executa algo antes do subscrib
import 'rxjs/add/operator/debounceTime' //Coloca um tempo para para que outro observable seja chamado
import 'rxjs/add/operator/distinctUntilChanged' //Evitando que o mesmo conteudo seja passado varias vezes
import 'rxjs/add/operator/catch' //tratamento de erro
import 'rxjs/add/observable/from' //Criar uma string atravez de um array
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [ //Animação de esconder e aparecer barra de pesquisa
      state('hidden', style({
        opacity: 0,
        "max-height" : "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height" : "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out')) //'* => *' = de qualquer um para qualquer um
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'

  restaurants: Restaurant[]

  //Formulario
  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantsService: RestaurantsService, private fb: FormBuilder) { } //Recebendo serviço no contrutor

  ngOnInit() { //Metodo que é carregado quando a pagina é carregada

    //Definindo formulario
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    //Filtrando restaurantes
    //valueChanges chama um evento toda vez que o campo é alterado (praticamente um event onChange)
    this.searchControl.valueChanges
      .debounceTime(500) //Um evento é chamdo apenas 5 segundos depois do outro (evitando que seja feita uma requisição para o back a cada letra digitada)
      .distinctUntilChanged()//Não deixar que a mesma pesquisa seja feita varias vezes (por exemplo, pesquisar doces, e depois rapidamente apagar e escrever de novo)
      .switchMap(searchTerm => 
        this.restaurantsService.restaurants(searchTerm) //switchMap substitui o Observable
        .catch(error=> Observable.from([]))) //Caso não de erro retornar array vazio
      .subscribe(restaurants => this.restaurants = restaurants) //Definindo o restaurants como os restaurantes pesquisados

    //Pegando todos restaurantes
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants) //subscribe efetua a requisição http do metodo do serviço para pegar os dados
  }

  //Metodo para aparecer barra de pesquisa
  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
