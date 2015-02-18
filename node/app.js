var express         = require('express'),
    session         = require('express-session'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'), //pour récupérer les résultats des post
    handlebars  	  = require('express-handlebars'), hbs, 
    http = require('http'),
	 path = require('path');


var sess;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', 6900);
app.set('views', path.join(__dirname, 'views'));

// routes static, le routeur n'y aura pas accès
app.use('/images',express.static(path.join(__dirname+ '/public/images')));
app.use('/js',express.static(path.join(__dirname+ '/public/js')));
app.use('/bootstrap',express.static(path.join(__dirname+ '/public/bootstrap')));

app.use(cookieParser());

app.use(session({
    secret: 'nC0@#1pM/-0qA1+é',
    name: 'Betisier',
    resave: true,
    saveUninitialized: true
}));

 
/* express-handlebars - https://github.com/ericf/express-handlebars
*  Handlebars : moteur de template pour Express.
* il va gérer les vues
*/
hbs = handlebars.create({
   defaultLayout: 'main', // nom de la page par defaut ici main.handlebars (structure de base HTML)
});
 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// chargement du routeur
require('./router/router')(app); 


http.createServer(app).listen(app.get('port'), function(){
  console.log('Serveur Node.js en attente sur le port ' + app.get('port'));
});

