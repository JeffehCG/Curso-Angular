import { Component, OnInit, Input} from '@angular/core'; //Necessario peger o decorate Input, para que outros componentes possão passar dados para esse

//Importando Interface
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-item-restaurant',
  templateUrl: './item-restaurant.component.html'
})
export class ItemRestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
