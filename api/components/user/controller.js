/*
[ Controller -  Tiene toda la lógica, todo lo que sea modificar, cambiar, modificar, comprobar, se hace aquí ]
*/

const TABLE = 'user';

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        store = require('../../../storage/database.js');
    }
    function list(){
        return store.list(TABLE);
    }

    function get(id){
        return store.get(TABLE, id);
    }

    return {
        list,
        get,
    };
}