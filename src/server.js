require('./database')
const express = require('express');
require('dotenv').config();
const path = require('path');
const exphbs = require('express-handlebars')
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  });
  app.engine(".hbs", hbs.engine);


app.set('view engine','hbs')

app.get('/', (req, res) => {
    res.render('index');
});

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/user.routes'));


app.use(express.static(path.join(__dirname, 'public')));

module.exports =app;
