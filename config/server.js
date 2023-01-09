//Importar Módulo do servidor express
const express = require('express');

//Importar Módulo do Consign
const consign = require('consign');

//Importar body-parser
const bodyParser = require('body-parser');

//Importar Express Validator
const expressValidator = require('express-validator');

//Iniciar o objeto do Express
const app = express();

//Setar as variáveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar o middleware express static
app.use(express.static('./app/public'));

//Configurar Middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

//configurar Express Validator
app.use(expressValidator());

//Efetua autoload das rotas, models e controllers para o objeto app
consign()
    .include('app/routes')
    .then('/config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//Exportar o objeto app
module.exports = app;








