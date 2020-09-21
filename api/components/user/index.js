//[ Se tabaja con el controlador como una funcion al cual se le inyecta el almacenamiento o base de datos ]

const store = require('../../../storage/database.js');// Base de datos
const ctr = require('./controller.js');

module.exports = ctr(store);