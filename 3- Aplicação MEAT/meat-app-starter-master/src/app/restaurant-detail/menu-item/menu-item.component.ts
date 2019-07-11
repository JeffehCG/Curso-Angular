import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core'; //EventEmitter e Output - trabalhar com eventos e eventos personalizados
import { MenuItem } from './menu-item.model'; //Interface
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [//Animações
    //Animação de entrada na pagina
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [ // Void representa quando não esta na aba, ou seja, essa animação sera aplicada quando for entrada na pagina (tambem é possivel aplicar na saida (ready => void))
        style({opacity: 0, transform: 'translateY(-20px)'}), //Aplicando estilo na transição
        animate('500ms 0s ease-in')
      ]) 
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = "ready"

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
