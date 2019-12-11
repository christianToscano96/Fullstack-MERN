//archivo principar de la configuracion del servidor
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

//crear el sercidor
const app = express();

//conectar a mongoodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    userNewUrlParser: true,
    useUnifieldTopology: true,
    useFindAndModify: false
});

//habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//habilitar routing
app.use('/', routes());

//puerto y arrancar el sevidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})