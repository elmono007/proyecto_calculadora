/* Este archivo es el controlador de la aplicacion, va a contener el objeto controlador y sus metodos que van 
a contener la funcionalidad de cada ruta definida */

const express = require('express');
const path = require('path');

// Declaramos el objeto que va a contener todos los metodos
const mainController = {

    home: (req, res) => {
        res.render(path.join(__dirname, '../views/home.ejs'));
    },

    calcular: (req, res) => {
        res.send('Calculo');
    }

}

// Exportamos el objeto para que sea usado por el ruteador 
module.exports = mainController;