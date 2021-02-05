const orm = require("../config/orm");

const burger = {
  selectAll: function (callback) {
    orm.selectAll("burger", (res) => callback(res));
  },
  insertOne: function (input, callback) {
    orm.insertOne("burger", input, (res) => callback(res));
  },
  updateOne: function (input, callback) {
    orm.updateOne("burger", input, (res) => callback(res));
  },
};

module.exports = burger;
