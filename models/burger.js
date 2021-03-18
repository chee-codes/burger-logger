const orm = require("../config/orm");

const burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", (res) => callback(res));
  },
  insertOne: function (col, val, callback) {
    orm.insertOne("burgers", col, val, (res) => callback(res));
  },
  updateOne: function (objColVal, condition, callback) {
    orm.updateOne("burgers", objColVal, condition, (res) => callback(res));
  },
};

module.exports = burger;
