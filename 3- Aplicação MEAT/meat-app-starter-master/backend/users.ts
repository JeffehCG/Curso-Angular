//Classe de usuario e lista de usuarios cadastrados no sistema
export class User {
    constructor(public email: string,
                public name: string,
                private password: string){}

    //Metodo para autentificar login
    matches(another: User): boolean{
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

//Tipando users, onde chave ser string o Objeto User
export const users: {[key: string]: User} = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana23'),
    "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda', 'amanda21'),
}