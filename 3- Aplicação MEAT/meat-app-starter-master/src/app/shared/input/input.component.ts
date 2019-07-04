import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms'


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string //atributos com Input são recebidos de outro componente
  @Input() errorMessage: string

  input: any

  @ContentChild(NgModel) model: NgModel //Referencia do NgModel, para referenciar os inputs para o form de order

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){ //Assim que for definido o que sera colocado em <ng-content></ng-content> esse metodo sera chamada
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
    }
  }

  //Metodo que retorna se o input esta valido
  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  //Metodo que retorna se o input esta invalido
  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
