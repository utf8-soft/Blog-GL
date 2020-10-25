var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;
//var blogInscription = require('../modeles/blogInscription');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {title: 'Liste des utilisateurs'})
});

router.get('/connexion', function(req, res, next) {
  res.render('connexion', {title: 'Connexion'})
});

router.get('/inscription', function(req, res, next) {
  res.render('inscription', {title: 'Inscription'})
});

router.post('/inscription', function (req, res, next) {
  //var bI = new blogInscription();
  db.bloginscriptions.insert(
    {
      "nom": req.body.nom,
      "prenom": req.body.prenom,
      "password": req.body.password,
      "cpassword": req.body.cpassword
    }
  );/*
  bI.nom = req.body.nom;
  bI.prenom = req.body.prenom;
  bI.password = req.body.password;
  bI.cpassword = req.body.cpassword;
  bI.save(function (err) {
    if (err) {
      res.render('inscription', { title: 'error' });
    }
    res.render('inscription', { title: 'Inscription' });
  });*/
  res.render('inscription', { title: 'Inscription' });
});
module.exports = router;
