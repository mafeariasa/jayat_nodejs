const express = require('express');

const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

//initialiazations 
require('./database');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


//middleweares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//Global variables
//routes

app.use(require('./routes'));
app.use(require('./routes/users'));
app.use(require('./routes/arrays'));



//static files
app.use(express.static(path.join(__dirname, 'public')));

//server is listen 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });
