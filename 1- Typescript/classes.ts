// //Definindo Classes
class Spacecraft {

    constructor (public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

// //Instanciando objeto
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership{
   
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

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership{

    cargoContainers: number
}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)

// //Interface Extentendo outra interface 

// interface Smugglership extends Containership{
//     hiddenContainers:number
// }



