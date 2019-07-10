import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>() //Atributo que é diponibilizado para o componete pai

  rates: number [] = [1,2,3,4,5] // Declarando cada estrela

  rate: number = 0 //Valor da avaliação (de 0 a 5)

  previousRate: number //Valor temporario, quando usuario passa o mouse por cima da estrela

  constructor() { }

  ngOnInit() {
  }

  //Metodo que ira definir a nota da avaliação (quantidade de estrelas) quando clicar
  setRate(r: number){
    this.rate = r
    this.previousRate = undefined
    this.rated.emit(r) //Passando evento que a avaliação foi setada para o elemento pai
  }

  //Ira definir a estrela quando passar o mouse por cima
  setTemporaryRate(r: number){
    if(this.previousRate === undefined){ //Salvando o valor original de rate
      this.previousRate = this.rate
    }
    this.rate = r
  }

  //Voltar para o valor da avaliação original quando tirar o mouse das estrelas
  clearTemporaryRate(r: number){
    if(this.previousRate !== undefined){
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }
}
