var express = require('express');
var router = express.Router();

var Categorias = require('../models/mcategorias');


/* GET home page. */
router.get('/', function (req, res) {

  Categorias.find({}, function (err, docs) {

 res.json(docs);

    });


})



module.exports = router;
