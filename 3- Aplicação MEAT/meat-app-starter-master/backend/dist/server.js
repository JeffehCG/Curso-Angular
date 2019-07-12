"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var auth_1 = require("./auth");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// .use associa todas as requisições
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser); //Pegando o valor do body
//middleware para login
server.post('/login', auth_1.handleAuthentication);
// Use default router
server.use(router);
//Configurações de certificado para https e key
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
//Pedindo para express escutar na porta 3001, em https, passando opções e o server(Que é a nossa aplicação)
https.createServer(options, server).listen(3001, function () {
    console.log('JSON Server is running on https://localhost:3001');
});
