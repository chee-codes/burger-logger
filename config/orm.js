const connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

const orm = {
  selectAll: function (input, callback) {
    let query = `SELECT * FROM ${input};`;
    connection.query(query, (err, res) => {
      if (err) throw err;
      // console.log(res);
      callback(res);
    });
  },

  insertOne: function (table, col, val, callback) {
    let query = "INSERT INTO " + table;

    query += " (";
    query += col.toString();
    query += ") ";
    query += "VALUES (";
    query += printQuestionMarks(val.length);
    query += ") ";

    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(res);
      callback(res);
    });
  },
  updateOne: function (table, objColVal, condition, callback) {
    let query = "UPDATE " + table;

    query += " SET ";
    query += objToSql(objColVal);
    query += " WHERE ";
    query += condition;

    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log("orm:" + res);
      callback(res);
    });
  },
};

module.exports = orm;
