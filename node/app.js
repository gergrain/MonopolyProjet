var express         = require('express'),app = express(),
    server = require('http').createServer(app),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
	io = require('socket.io').listen(server),
    handlebars  	  = require('express-handlebars'), hbs, 
    http = require('http'),
	 path = require('path');
	fs = require('fs');



app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html');
});
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', 6900);
app.set('views', path.join(__dirname, 'views'));

// routes static, le routeur n'y aura pas accès
app.use('/images',express.static(path.join(__dirname+ '/public/images')));
app.use('/js',express.static(path.join(__dirname+ '/public/js')));
app.use('/css',express.static(path.join(__dirname+ '/public/css')));
app.use('/bootstrap',express.static(path.join(__dirname+ '/public/bootstrap')));

app.use(cookieParser());

var joueur = [{'nom':null},{'jeton':false}];
var tabJoueur =[joueur,joueur,joueur,joueur]
io.sockets.on('connection', function (socket,pseudo) {
	console.log("Quelqu'un s'est connecté");
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
	if(tabJoueur[0].nom==null||tabJoueur[1].nom==null||tabJoueur[2].nom==null||tabJoueur[3].nom==null){
		console.log("ça passe");
		socket.on('nouveauJoueur', function(pseudo) {
			if(tabJoueur[0].nom==null){
				tabJoueur[0].jeton=true;
			}
			tabJoueur[0].nom==pseudo;
			socket.tabJoueur = pseudo;
			
			//socket.broadcast.emit('nouveau_client', pseudo);
		});
		socket.on('EnvoieVariable', function(variable) {
			console.log("ça passe pour le get");
			socket.broadcast.emit('SetVariable', variable);

		});
	}
});

/* express-handlebars - https://github.com/ericf/express-handlebars
*  Handlebars : moteur de template pour Express.
* il va gérer les vues
*/
hbs = handlebars.create({
   defaultLayout: 'main', // nom de la page par defaut ici main.handlebars (structure de base HTML)
});
 server.listen(6900);
console.log("Serveur lancé sur le port : 6900")