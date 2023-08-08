const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

const Student = db.define("Student", {

    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },

    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "image",
    },

    gpa: {
        type: DataTypes.DECIMAL(10,1),
    },
});

module.exports = Student;