/* Vamos a usar este archivo app.js como punto de entrada a una aplicacion web.
La idea es tener todo lo necesario de NodeJs y Express para poder tomarlo como template 
El package.json lo copie de un ecommerce propio para que luego hagamos un npm install

Asimismo como Template Engine vamos a usar EJS */

const express = require('express');
const path = require('path');
const fs = require('fs');
const dotenv = require("dotenv").config();

// Definimos la aplicacion Express
const app = express();

// Seteamos la ruta de los archivos estáticos en al carpeta public
const publicPath = path.resolve(__dirname + '../../public');
app.use( express.static(publicPath) );

// Seteamos el Temaplate Engine, en este caso EJS, pero puede ser PUG, Mustache.
// Primer Parametro = View Engine
// Segundo Parametro = Motor de Plantillas a usar (Pug, EJS, Mustache)
app.set("view engine", "ejs");

// Requerimos el routerMain y Seteamos el archivo de ruteo
const routerMain = require('./routes/mainRouter');
app.use(routerMain);

// Levantamos el servidor en base a los datos de configuracion del archivo ".env"
let PORT
process.env.STATUS === "production"
    ? (PORT = process.env.PROD_PORT)
    : (PORT = process.env.DEV_PORT);

app.listen(PORT, ()=> console.log(`Servidor escuchando en el puerto ${PORT}`));




