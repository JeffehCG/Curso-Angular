import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'; //Para pegar o parametro da rota

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id']) //Pegando o parametro do componente pai
      //Não é feito o subscrib aqui por que ele esta sendo feito no Pipe async no html
  }

}
