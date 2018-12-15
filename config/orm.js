let connection = require("../config/connection.js");

let orm = {
  all: function(table, cb) {
    connection.query('SELECT * FROM ??', table, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  create: function(table, col, val, cb) {
    connection.query('INSERT INTO ?? (??) VALUES (?)', [table, col, val], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(table, param, val, id, cb) {
    connection.query('UPDATE ?? SET ?? = ? WHERE id=?',[table, param, val, id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;