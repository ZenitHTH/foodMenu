const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const foodShema = require("../models/food.db");
const typeShema = require("../models/type.db");
const subtypeShema = require("../models/subtype.db");

router.route("/").get((req, res) => {
  foodShema.find({}, async (err, data) => {
    const subtypeList = [];
    const foodList = [];
    if (err) console.log(err);
    const fetchData = await data.map(async (f) => {
      console.log(f);
      await f.idsubtype.map(async (id) => {
        const subtype = await subtypeShema.findById(id);

        subtypeList.push(subtype.name);
      });

      const type = await typeShema.findById(f.idtype);
      foodList.push({
        name: f.name,
        price: f.price,
        type: type.name,
        subtype: subtypeList,
      });
    });
    Promise.all(fetchData).then(() => {
      res.json(foodList);
      res.status(201).end();
    });
  });
});

module.exports = router;