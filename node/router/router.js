var HomeController = require('./../controllers/HomeController');
var ConnectController = require('./../controllers/ConnectController');
var PersonneController = require('./../controllers/PersonneController');
var CitationController = require('./../controllers/CitationController');
var VilleController = require('./../controllers/VilleController');

// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);

// citations
    app.get('/listerCitation', CitationController.ListerCitation);
    app.get('/ajouterCitation', CitationController.AjouterCitation);
    app.get('/rechercherCitation', CitationController.RechercherCitation);

 // villes
   app.get('/listerVille', VilleController.ListerVille);
   app.get('/ajouterVille', VilleController.AjouterVille);
   app.get('/modifierVille', VilleController.ModifierVille);

// connection
   app.get('/connect', ConnectController.Connect);
   app.post('/connection', ConnectController.Connection);
   app.get('/deconnect', ConnectController.Deconnect);


 //personne
   app.get('/listerPersonne', PersonneController.ListerPersonne);
   app.get('/ajouterPersonne', PersonneController.AjouterPersonne);
   app.get('/detailPersonne/:nump', PersonneController.DetailPersonne);

// tout le reste
  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
