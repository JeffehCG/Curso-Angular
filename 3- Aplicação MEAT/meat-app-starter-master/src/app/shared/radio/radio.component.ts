import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RadioComponent), //Registrando o componente como um Value Accessor, para ser usado pelo NgModel
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[] //Opçoes recebidas de outro componente

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){ //Metodo do evento de click que marca o radio 
    this.value = value 
    this.onChange(this.value)
  }

    writeValue(obj: any): void{ //Diretivas passando um valor para o componente
      this.value = obj
    }

    registerOnChange(fn: any): void{ //Chama função sempre que o valor interno do componente mudar
      this.onChange = fn
    }

    registerOnTouched(fn: any): void{ //Registando se o usuario entrou ao componente
    }

    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void{}
}
