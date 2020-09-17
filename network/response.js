
/*
[ Response.js - Cada que una petición sea correcta o incorrecta este modulo responde,
de esta manera nos aseguramos que las respuestas tengan la mismo forma y sentido ]

2XX: Todo ha ido bien.
3XX: La petición se ha redirigido.
4XX: Errores del cliente.
5XX: Ha habido un error al procesar la petición.
*/

const { addListener } = require("nodemon");


//Respuesta success
exports.success = function (req, res, message, status){
    let statusCode = status || 200;// Si no viene ningun status mandaremos el 200
    let statusMessage = message || '';

    res.status(status).send({
        erro: false,
        status: status,
        body: message,
    });
}

//Respuesta error
exports.error = function (req, res, message, status){
    let statusCode = status || 500;// Si no viene ningun status mandaremos el 500
    let statusMessage = message || 'Internal server error';

    res.status(statusCode).send({
        erro: false,
        status: status,
        body: message,
    });
}