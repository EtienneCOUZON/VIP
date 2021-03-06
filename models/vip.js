let db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.firstLetter = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT SUBSTRING(VIP_NOM,1,1) AS FIRSTLETTER FROM vip ORDER BY VIP_NOM  ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.VipLetter = function(lettre, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select v.vip_prenom as Prenom_star, v.vip_numero as Num_star,v.vip_nom as Nom_star, photo_adresse as Photo_star from photo p inner join vip v ON v.vip_numero = p.vip_numero Where vip_nom like '"+lettre+"%' and photo_numero =1;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.DetailsVip = function(vip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select v.vip_prenom as Prenom_star, v.vip_numero as Num_star, v.vip_nom as Nom_star,v.vip_naissance as Naissance_star, v.vip_texte as Texte_star, photo_adresse as Photo_star from photo p inner join vip v ON v.vip_numero = p.vip_numero Where v.vip_numero like '"+vip+"';";
             console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.NationaliteVip = function(vip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select n.nationalite_nom as Nationalite_star from nationalite n inner join vip v ON v.nationalite_numero = n.nationalite_numero Where v.vip_numero like '"+vip+"';";
             console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.PhotoVip4 = function(vip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select photo_adresse as Photo_star  from photo p inner join vip v ON v.vip_numero = p.vip_numero Where v.vip_numero like '"+vip+"';";
             console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.MariageVip = function(vip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NOM AS Nom_Star, VIP_PRENOM AS Prenom_Star, DATE_EVENEMENT AS Mariage_Debut, MARIAGE_FIN AS Mariage_Fin, MARIAGE_LIEU AS Mariage_Lieu FROM VIP v JOIN MARIAGE m ON v.VIP_NUMERO=m.VIP_VIP_NUMERO AND m.VIP_NUMERO='"+vip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.PhotoVip = function(vip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select p.photo_adresse as Photo from photo p inner join vip v ON v.vip_numero = p.vip_numero Where v.vip_numero like '"+vip+"' and photo_numero !=1;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
