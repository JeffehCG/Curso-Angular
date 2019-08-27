import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms'


@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string //atributos com Input são recebidos de outro componente
  @Input() errorMessage: string
  @Input() showTip: boolean = true

  input: any
  
  //Trabalhando com NgModel
  @ContentChild(NgModel) model: NgModel //Referencia do NgModel, para referenciar os inputs para o form de order
  //Ou trabalhando com FormControl
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){ //Assim que for definido o que sera colocado em <ng-content></ng-content> esse metodo sera chamada
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
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
