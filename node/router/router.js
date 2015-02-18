var HomeController = require('./../controllers/HomeController');


// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);


// tout le reste
  app.get('*', HomeController.Index);

};
