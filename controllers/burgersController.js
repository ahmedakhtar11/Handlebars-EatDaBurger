var express = require('express');
var router = express();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
  burger.updateAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res) {
  burger.insertBurger(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data) {

    res.json({ id: data.insertId });
  });
});

router.put('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition:', condition);

  burger.updateBurger(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
module.exports = router;
