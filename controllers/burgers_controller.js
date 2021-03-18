const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObj = {
      burgers: data,
    };
    // console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    (response) => {
      res.json({ id: response.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  console.log("this is the condition: " + condition);
  console.log("this is the body: " + req.body);

  burger.updateOne({ devoured: req.body.devoured }, condition, (response) => {
    if (response.changedRows == 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  });
});

module.exports = router;
