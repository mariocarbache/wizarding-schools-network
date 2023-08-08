const express = require('express');
const router = express.Router();
const db = require("../db/db");
const Campus = require("../db/campus");

router.get("/api/school", async(req, res) =>{
    try{
        const campuses = await Campus.findAll();
        res.json(campuses);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
});

module.exports = router;