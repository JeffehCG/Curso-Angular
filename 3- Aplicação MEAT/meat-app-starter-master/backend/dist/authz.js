"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthorization = function (req, resp, next) {
    var token = extractToken(req); //Extraindo token
    if (!token) {
        resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"');
        resp.status(401).json({ message: 'Você precisa se autentificar.' });
    }
    else {
        //Verificar o token e decodificar o mesmo
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            //Se o token estiver correto sera chamado o next(), deixando o request passar
            if (decoded) {
                next();
            }
            else {
                resp.status(403).json({ message: 'Não autorizado' });
            }
        });
    }
};
function extractToken(req) {
    var token = undefined;
    //Verificando se o token esta presente no header da requisição
    if (req.headers && req.headers.authorization) {
        //Authorization: Bearer ZZZ.ZZZ.ZZZ (Modelo do retorno)
        var parts = req.headers.authorization.split(' '); //Dividindo a string em duas apartir do espaço
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    return token;
}
