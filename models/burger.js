var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, devoured, cb) {
    orm.create("burgers", "burger_name", "devoured", name, devoured, function(res) {
      cb(res);
    });
  },
  update: function(name, devoured, id, cb) {
    orm.update("burgers", "burger_name", name, "devoured", devoured, id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
