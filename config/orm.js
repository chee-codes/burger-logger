const connection = require("./connection");

const orm = {
  selectAll: function (input, callback) {
    const query = `SELECT * FROM ${input};`;
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
  insertOne: function (input, name, callback) {
    const query = `INSERT INTO ${input} (burger_name) VALUES ("${name}")`;
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
  updateOne: function (id, val, callback) {
    const query = `UPDATE burgers SET devoured = ${val} WHERE id = ${id}`;
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
};

module.exports = orm;
