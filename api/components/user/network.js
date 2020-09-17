/*
[ Networks.js - Archivo donde ponemos todas las rutas, aquí ponemos los end points e información que tenga que ver con el protocolo HTTP ]

Métodos HTTP:

GET: Recoger información del servidor.
POST: Añadir información al servidor.
PUT: Reemplazar información en el servidor.
PATCH: Actualizar parte de la información.
DELETE: Eliminar información del servidor.
OPTIONS: Pedir información sobre métodos (saber si podemos ejecutar alguno de los métodos anteriores).
*/

const express = require('express');
const router = express.Router();
const response = require('../../../network/response.js');
const controller = require('./index.js');

router.get('/', function(req, res){
    controller.list()
    .then((lista)=>{
        response.success(req, res, lista, 200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500);
    })
});

router.get('/:id', function(req, res){
    controller.get(req.params.id)
    .then((user) =>{
        response.success(req, res, user, 200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500);
    })
});

module.exports = router;