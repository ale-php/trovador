var express = require('express');
var router = express.Router();

var Poemas = require('../models/mpoemas');

/* GET home page. */
router.get('/', function (req, res) {
	
    Poemas.find({}, function (err, docs) {

        res.json(docs);
    });
});

router.get('/ver/:name', function (req, res) {
	
	 var name = req.params.name; 

    Poemas.find({categories:name}, function (err, docs) {

        res.json(docs);
    });
});



module.exports = router;
