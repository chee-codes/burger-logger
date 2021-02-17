const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObj = {
      burgers: data,
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["name"], [req.body.burger_name], (response) => {
    res.json({ id: response.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const id = req.params.id;

  burger.updateOne(id, { devoured: req.body.devoured }, (response) => {
    if (response.changedRows == 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  });
});

module.exports = router;
