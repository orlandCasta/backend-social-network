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
const response = require('../../../network/response');
const Controller = require('./index');
const router = express.Router();

// Routes
router.get('/', list)
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

// Internal functions
function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

function get(req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

function upsert(req, res) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

module.exports = router;