const mysql = require('mysql');

let connMySQL = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'adm_veiculos',
        password : 'carros2021',
        database : 'automoveis'
    });
}

module.exports = function() {
    return connMySQL;
}