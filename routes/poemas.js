var express = require('express');
var router = express.Router();

var Poemas = require('../models/poemas');

/* GET home page. */
router.get('/', function (req, res) {
    Poemas.find({}, function (err, docs) {

        res.json(docs);
    });
});



module.exports = router;
