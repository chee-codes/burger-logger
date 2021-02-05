const connection = require("./connection.js");

const orm = {
  selectAll: function (callback) {
    const query = "SELECT * FROM burger";
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
  insertOne: function (input, callback) {
    const query = "INSERT INTO burgers (name) VALUES (" + input + ")";
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
  updateOne: function (input, callback) {
    const query = "UPDATE burgers SET devoured = true WHERE " + input;
    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
};

module.exports = orm;
