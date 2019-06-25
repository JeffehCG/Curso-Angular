// //Funções-----------------Exemplos-------------------

// function useTheForce(name:string):void{
//     console.log('Use the force,'+nome)
// }

// let shortRun = function (parsecs:number):boolean{
//     return parsecs < 12
// }

// //Diferença de uma função comum e uma arrow
// let tieFighters = ships.filter(function(ship){
//     return ship.type === 'TieFighter'
// })

// let ties - ship.filter(ship => ship.type === 'TieFighter)

// //Definindo que a variavel sera uma função
// let call: (name:string) => void
// call = name => console.log("Do you copy,"+name+"?")

// //Definindo parametro opcional na função
// function inc(speed: number, inc?:number):number{
//     let i = inc || 1
//     return speed + i 
// }
// function inc(speed: number, inc:number = 1):number{
//     return speed + i
// }

// //Parametro rast (recebendo varios valores)
// function countJedis(...jedis:number[]):number{
//     return jedis.reduce((a,b) => a+b , 0)
// } 
// countJedis(2,3,4)

let isEnoughToBeatMF = function (parsecs: number): boolean{
    return parsecs < 12
}

let distance: number = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'Yes' : 'No'}`)

let call = (name: String) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc:number = 1) :number{
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)