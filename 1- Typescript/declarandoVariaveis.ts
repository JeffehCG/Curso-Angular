// //Typescript tem uma tipagem forte, ou seja, o tipo das variaveis devem ser definidos

// //Declarando tipo primeito
// let name: string ; 
// name = "teste" ;

// //Ou da forma abaixo, onde o tipo ja é definido automaticamente
// let name = "teste" ; 

// //Tipos
// let tipo1: boolean;
// let tipo2: number;
// let tipo3: string;
// let tipo4: any; // não recomendado

// //Arays - Declarando
// let array1: number[] = [1,2,3]
// let array2: Array<number> = [1,2,3]
// let array3 = [1,2,3]

let message:string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log("This is episode " + episode)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)