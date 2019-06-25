import {SpaceCraft, Containership} from './moduloBase-ships'

export class MillenniumFalconn extends SpaceCraft implements Containership{
   
    cargoContainers: number

    constructor(){
        super('hyperdrive') //Se usa super para utilizar metodos e o contrutor da classe pai
        this.cargoContainers = 2
    }

    jumpIntoHyperspace(){
        if(Math.random()>= 0.5){
            super.jumpIntoHyperspace()
        }else{console.log('Failed to jump into hyperspace')}
    }
}