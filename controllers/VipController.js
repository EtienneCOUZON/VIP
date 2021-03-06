
let model = require("../models/vip.js");
let async=require("async");
const { response } = require("express");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
    let data = request.params.num;
   response.title = 'Répertoire des stars';
   model.firstLetter(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
      response.firstLetter = result; // result contient : [ RowDataPacket { FIRSTLETTER: A } ]
      console.log(result);
      response.render('repertoireVips', response); // appel la vue Handlebars qui va afficher le résultat
  } );
} ;

module.exports.VipLetter = 	function( request,  response){
    let lettre = request.params.lettre;
    response.title = 'Vip par lettre';
    async.parallel ([
        function (callback){
            model.firstLetter(function (err, result){callback(null, result)});
        },
        function (callback){
            model.VipLetter(lettre,(function(errE, resE) {callback(null, resE) }));
          } ,
          ],  
        function(err,result){
            if(err){
                console.log(err);
                return;
            }
       response.listeLettre = result[0];
       response.data=result[1] 
       console.log(result[0]);
       console.log(result[1]);

       response.render('listerPhotoParLettre', response); 
   } );
}
module.exports.DetailsVip = function(request, response){
    console.log("ok test");
    let vip = request.params.num_vip;
    response.title = 'Détails du vip';
    async.parallel ([
        function (callback){
            model.firstLetter(function (err, result){callback(null, result)});
        },
        function (callback){
            model.DetailsVip(vip,(function(errE, resE) {callback(null, resE) }));
          } ,
        function (callback){
            model.NationaliteVip(vip,(function(errE,resE){callback(null,resE)}));
        },
        function (callback){
            model.MariageVip(vip,(function(errE, resE){callback(null, resE)}));
        },
        function (callback){
            model.PhotoVip(vip,(function(err, result){callback(null, result)}));
        }
          ],  
        
        function(err,result){
            if(err){
                console.log(err);
                return;
            }
       response.listeLettre = result[0];
       response.detailsvip=result[1][0]; 
       response.NationaliteVip=result[2][0];
       response.MariageVip=result[3][0];
       response.PhotoVip=result[4][1];


       console.log(result[0]);
       console.log(result[1][0]);
       console.log(result[2][0]);
       console.log(result[3][0]);
       console.log(result[4][1]);
    

       response.render('listerDetailsVip', response); 
   } );
}
