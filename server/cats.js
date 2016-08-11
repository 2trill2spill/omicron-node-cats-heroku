var express = require('express');
var router = express.Router();

// data array
var cats = [{name: 'Luna', trait: 'Fiesty'}];

// Routes
router.get('/', function(req, res) {
  res.send(cats);
});

router.post('/', function(req, res) {
  cats.push(req.body)
  res.sendStatus(201);
});

module.exports = router;