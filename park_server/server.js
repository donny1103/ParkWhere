"use strict";
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const app = express();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
// const morgan = require('morgan');
// const knexLogger = require('knex-logger');

app.use(express.static("public"));

app.get("/", (req, res) => {
  knex("street_parking")
    .where({
      id: 1
    }).then(function (rows){
      console.log(rows);
    })
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
