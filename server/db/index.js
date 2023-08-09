"use strict";

const db = require("./db");

// Require your models and make your associations
const Campus = require("./campus");
const Student = require("./student");

Campus.hasMany(Student, {
  foreignKey: "CampusId"
});
Student.belongsTo(Campus);


module.exports = {
  db, Student, Campus 
};
