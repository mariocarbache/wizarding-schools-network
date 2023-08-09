"use strict";
const router = require("express").Router();
const {db, Campus, Student} = require("../db/index"); // require your database and modules

//and place your routes here
router.get("/wizarding-schools", async(req, res) =>{
    try{
        const campuses = await Campus.findAll();
        res.json(campuses);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
});

router.get("/students", async(req, res) =>{
    try{
        const students = await Student.findAll();
        res.json(students);
    }catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;