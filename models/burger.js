const orm = require("../config/orm");

const burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", (res) => callback(res));
  },
  insertOne: function (input, callback) {
    orm.insertOne("burgers", input, (res) => callback(res));
  },
  updateOne: function (input, callback) {
    orm.updateOne("burgers", input, (res) => callback(res));
  },
};

module.exports = burger;
