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

router.post("/wizarding-schools", async (req, res) => {
    try {
        const { name, imageUrl, description, address } = req.body;
        const newCampus = await Campus.create({
            name,
            imageUrl,
            description,
            address,
        });
        res.status(201).json(newCampus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post("/students", async (req, res) => {
    try {
        const { firstName, lastName, email, gpa, campusId } = req.body;
        const newStudent = await Student.create({
            firstName,
            lastName,
            email,
            gpa,
            campusId,
        });
        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.delete("/wizarding-schools/:id", async (req, res) => {
    const schoolId = req.params.id;
  
    try {
      const school = await Campus.findByPk(schoolId);
  
      if (!school) {
        return res.status(404).json({ message: "Wizarding school not found" });
      }

      await school.destroy();
  
      res.json({ message: "Wizarding school removed successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

  router.delete("/students/:id", async (req, res) => {
    const studentId = req.params.id;
  
    try {
      const student = await Student.findByPk(studentId);
  
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      // Delete the student
      await student.destroy();
  
      res.json({ message: "Student removed successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

  router.put("/wizarding-schools/:id", async (req, res) => {
    const schoolId = req.params.id;
  
    try {
      const school = await Campus.findByPk(schoolId);
  
      if (!school) {
        return res.status(404).json({ message: "Wizarding school not found" });
      }
  
      school.name = req.body.name;
      school.imageUrl = req.body.imageUrl;
      school.description = req.body.description;
      school.address = req.body.address;
  
      await school.save();
  
      res.json({ message: "Wizarding school updated successfully", school });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  router.put("/students/:id", async (req, res) => {
    const studentId = req.params.id;
  
    try {
      const student = await Student.findByPk(studentId);
  
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      student.email = req.body.email;
      student.gpa = req.body.gpa;
      student.CampusId = req.body.CampusId;
  
      await student.save();
  
      res.json({ message: "Student updated successfully", student });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

  router.put('/unenroll/:studentId', async (req, res) => {
    try {
      const studentId = req.params.studentId;
      const student = await Student.findByPk(studentId);
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      student.CampusId = null;
      await student.save();
  
      res.json({ message: 'Student unenrolled successfully', student });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  


module.exports = router;