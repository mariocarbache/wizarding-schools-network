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

router.get("/wizarding-schools/:id", async(req, res) =>{
    try{
        const campus = await Campus.findByPk(req.params.id, {
            include: Student,
        });
        res.json(campus);
    }catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get("/students/:id", async(req, res) =>{
    try{
        const student = await Student.findByPk(req.params.id, {
            include:{
                model: Campus,
                as: 'Campus',
            }
        });
        res.json(student);
    }catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router;