let connection = require("../config/connection.js");

let orm = {
  all: function(table, cb) {
    connection.query('SELECT * FROM ?', table, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  create: function(table, col1, col2, val1, val2, cb) {
    connection.query('INSERT INTO ?? (??, ??) VALUES (?,?)', [table, col1, col2, val1, val2], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(table, param1, param2, val1, val2, id, cb) {
    connection.query('UPDATE ?? SET ? = ?, ? = ? WHERE id=?',[table, param1, val1, param2, val2, id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;