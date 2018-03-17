// Import the ORM
var orm = require('../config/orm.js');

var burger = {
  updateAll: function(cb) {
    orm.updateAll('burgers', function(res) {

//Callback
      cb(res);
    });
  },

  insertBurger: function(cols, vals, cb) {

    orm.insertBurger('burgers', cols, vals, function(res) {

      cb(res);
    });
  },
  updateBurger: function(obj, condition, cb) {

// Update Burger With ORM
    orm.updateBurger('burgers', obj, condition, function(res) {

//Callback
      cb(res);
    });
  }
};

// Export to controller
module.exports = burger;
