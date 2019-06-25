import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Para pegar atributo da URL

import { RestaurantsService } from '../restaurants/restaurants.service'; //Serviço que se comunica com o backend
import { Restaurant } from 'app/restaurants/item-restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant //Interface

  constructor(private restaurantsService: RestaurantsService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id']) //Pegando parametro ID da URL 
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
