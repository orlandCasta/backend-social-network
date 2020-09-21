const store = require('../../../storage/database.js');// Base de datos
const ctr = require('./controller.js');

module.exports = ctr(store);