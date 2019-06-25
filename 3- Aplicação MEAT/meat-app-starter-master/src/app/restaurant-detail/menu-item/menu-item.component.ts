import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core'; //EventEmitter e Output - trabalhar com eventos e eventos personalizados
import { MenuItem } from './menu-item.model'; //Interface

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem //Atributo passado pelo componente pai

  @Output() add = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  //Adicionar o item no carrinho
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
