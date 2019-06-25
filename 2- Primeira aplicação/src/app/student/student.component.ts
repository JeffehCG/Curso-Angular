import { Component, OnInit, Input } from '@angular/core';

// Importando interface Student (student.model.ts)
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // @Input() name: string 
  // @Input() isJedi: boolean 

  @Input() student : Student // Os atributos seram os mesmos da interface

  constructor() { }

  ngOnInit() {
  }

  clicked(){ // Metodo chamado no evento de click
    console.log(`Student: ${this.student.name}`)
  }

}
