import * as jsonServer from 'json-server'
import { Express} from 'express'

import * as fs from 'fs'
import * as https from 'https'

import { handleAuthentication } from './auth';
import { handleAuthorization } from './authz';

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// .use associa todas as requisições
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser) //Pegando o valor do body

//middleware para login
server.post('/login', handleAuthentication)

//middleware para efetuar a autenficação e autoriazação do token recebido
//toda requisição que começe com /orders deverar fazer a autentificação primeiro, depois liberara para efetuar o pedido
server.use('/orders', handleAuthorization)

// Use default router
server.use(router)

//Configurações de certificado para https e key
const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

//Pedindo para express escutar na porta 3001, em https, passando opções e o server(Que é a nossa aplicação)
https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running on https://localhost:3001')
})