var express = require('express');
var config = require('../config');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: config.get('title')});
});

router.post('/change/:name', function (req, res, next) {
    console.log('req.body.title', req.body.title);
    var text = req.body.title;
    config.set(req.params.name, text);
    res.send(200);
});

module.exports = router;
