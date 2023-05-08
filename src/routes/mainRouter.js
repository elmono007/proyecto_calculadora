/* Este archivo es el que va a contener las rutas para que el modelo MVC pueda ser usado
Llamamos a las rutas desde las distintas paginas y el router las va a ir ruteando a los metodos del 
controlador */

const express = require('express');
const path = require('path');

//Llamamos al controlador Principal
const mainController = require('../controllers/mainController');

//Definimos la variable Router quiens nos va rutear los pedidos al controlador
const router = express.Router();

// ----------- Rutas Get -----------
router.get('/', mainController.home);

// ----------- Rutas Post -----------
router.post('/calcular', mainController.calcular);

// Finalmente exportamos el objeto router para que sea usado por la aplicacion.
module.exports = router;

