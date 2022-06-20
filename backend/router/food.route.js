const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const foodShema = require("../models/food.db");

//create food
router
  .route("/")
  .post(async (req, res) => {
    /*
        request JSON
        {
            idtype:objectid
            idsubtype:[objectid...]
            name:namefood
            price:pricefood
        }
    */

    await foodShema.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
        res.status(201).end();
      }
    });
  })
  .get((req, res, next) => {
    foodShema.find((err, data) => {
      if (err) {
        console.log(err);
        next(err);
      } else {
        res.json(data);
        res.status(200).end();
      }
    });
  });

//delete food

//edit food

module.exports = router;
