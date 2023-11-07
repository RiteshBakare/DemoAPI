const express = require("express");
const { addData, showData } = require("../controllers/demo.controllers");

const demoRoutes = express.Router();

demoRoutes.post("/addData",addData)
demoRoutes.get("/getData",showData)

module.exports = demoRoutes;