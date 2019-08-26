//Arquivo para autentificar e autorizar o token recebido
import {Request, Response} from "express"
import * as jwt from "jsonwebtoken"
import {apiConfig} from './api-config'

export const handleAuthorization = (req: Request, resp: Response, next) => {
    const token = extractToken(req) //Extraindo token
    if(!token){
        resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"')
        resp.status(401).json({message: 'Você precisa se autentificar.'})
    }else{
        //Verificar o token e decodificar o mesmo
        jwt.verify(token, apiConfig.secret, (error, decoded) => {
            //Se o token estiver correto sera chamado o next(), deixando o request passar
            if(decoded){
                next()
            }else{
                resp.status(403).json({message: 'Não autorizado'})
            }
        })
    }
}

function extractToken(req: Request): string {
    let token = undefined
    //Verificando se o token esta presente no header da requisição
    if(req.headers && req.headers.authorization){
        //Authorization: Bearer ZZZ.ZZZ.ZZZ (Modelo do retorno)
        const parts: string[] = req.headers.authorization.split(' ') //Dividindo a string em duas apartir do espaço
        if(parts.length === 2 && parts[0] === 'Bearer'){
            token = parts[1]
        }
    }

    return token
}