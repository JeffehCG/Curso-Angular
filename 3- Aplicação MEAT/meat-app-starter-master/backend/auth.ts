//Arquivo de autentificação (login)
import { Request, Response} from 'express'
import { User, users} from './users'

//Biblioteca para criar o token
import * as jwt from 'jsonwebtoken'
import {apiConfig} from './api-config'

export const handleAuthentication = (req: Request, resp: Response) =>{
    const user: User = req.body //O objeto que vem do body é do tipo User
    if(isValid(user)){
        const dbUser = users[user.email]
        const token = jwt.sign( 
            {sub: dbUser.email, iss: 'meat-api'}, //Dados de dentro do token (Dados, tempo de validade etc..)
            apiConfig.secret) //Password para gerar a assinatura

        resp.json({name: dbUser.name, email: dbUser.email, accessToken: token}) //Retornando dados do usuario o login seja autentificado com sucesso
    }else{//Caso usuario não seja valido, exibir erro
        resp.status(403).json({message: 'Dados invalidos'})
    }
}

//Metodo para verificar se o usuario é valido
function isValid(user: User): boolean{
    if(!user){//se user for nullo
        return false
    }
    const dbUser = users[user.email] //Pegando o usuario da lista
    return dbUser !== undefined && dbUser.matches(user) //Verificando se a senha confere
}