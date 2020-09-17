/*
[ Servidor.js - El encargado de recibir las peticiones es el server.js, este verificara que las peticiones
sean correctas para entrar al servidor o cancelarlas, tiene configuración importante, base de datos,
cabeceras, etc. el servidor.js manda la información a response.js y route.js ]
*/

const express = require('express');
const app = express();
const config = require('../config.js');// [Archivo de configuracion]
const user = require('./components/user/network.js');
const bodyParser = require('body-parser');//nos permite trabajar con la data de json

//[Rutas]
app.use('/api/user', user);


app.listen(config.api.port, () => {
    console.log('API escuchando en el puerto', config.api.port);
})