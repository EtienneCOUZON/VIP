let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AlbumController = require('./../controllers/AlbumController');
let TestController = require('./../controllers/TestController');



// Routes
module.exports = function(app){

  // tests à supprimer
    app.get('/test', TestController.Test);

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);

// VIP
    app.get('/repertoire', VipController.Repertoire);

 // albums
   app.get('/album', AlbumController.ListerAlbum);
    // RepertoireVip

   app.get('/repertoire/:lettre', VipController.VipLetter);
   // DetailsVip
   app.get('/repertoire/DetailsVip/:num_vip', VipController.DetailsVip)

// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);
};
