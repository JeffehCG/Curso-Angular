import { Component, OnInit } from '@angular/core';
import { Restaurant } from './item-restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service'; //Importando serviço que se comunica com o banco

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { } //Recebendo serviço no contrutor

  ngOnInit() { //Metodo que é carregado quando a pagina é carregada
    this.restaurantsService.restaurants() //Pegando todos restaurantes
      .subscribe(restaurants => this.restaurants = restaurants) //subscribe efetua a requisição http do metodo do serviço para pegar os dados
  }

}
