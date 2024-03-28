


/*const express = require('express');
require('dotenv').config();
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuración de la plantilla principal
app.set('layout', 'layouts/main');
app.set("layout extractScripts", true); // Esto extraerá scripts de las vistas para incluirlos en la plantilla principal

// Middleware para usar el layout
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' }); // Puedes pasar variables a tus vistas si es necesario
});

app.get('/about', (req, res) => {
    res.render('abaut', { title: 'about' }); // Puedes pasar variables a tus vistas si es necesario
});

module.exports=app;*/