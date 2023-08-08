"use strict";
const router = require("express").Router();
const db = require("../db/index"); // require your database 

//and place your routes here
const wizardingSchoolsRouter = require("./wizardingSchools");

router.use("/schools", wizardingSchoolsRouter);

module.exports = router;