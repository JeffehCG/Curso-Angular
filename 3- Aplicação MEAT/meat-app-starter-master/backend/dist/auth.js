"use strict";
exports.__esModule = true;
var users_1 = require("./users");
exports.handleAuthentication = function (req, resp) {
    var user = req.body; //O objeto que vem do body é do tipo User
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        resp.json({ name: dbUser.name, email: dbUser.email }); //Retornando dados do usuario o login seja autentificado com sucesso
    }
    else { //Caso usuario não seja valido, exibir erro
        resp.status(403).json({ message: 'Dados invalidos' });
    }
};
//Metodo para verificar se o usuario é valido
function isValid(user) {
    if (!user) { //se user for nullo
        return false;
    }
    var dbUser = users_1.users[user.email]; //Pegando o usuario da lista
    return dbUser !== undefined && dbUser.matches(user); //Verificando se a senha confere
}
