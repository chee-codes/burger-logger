const connection = require("./connection");

const orm = {
  selectAll: function (input, callback) {
    const query = `SELECT * FROM ${input};`;
    connection.query(query, (err, res) => {
      if (err) throw err;

      //console.log(res);
      callback(res);
    });
  },
  insertOne: function (input, callback) {
    const query = "INSERT INTO burger (name) VALUES (" + input + ")";
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
  updateOne: function (input, callback) {
    const query = "UPDATE burger SET devoured = true WHERE " + input;
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
};

module.exports = orm;
