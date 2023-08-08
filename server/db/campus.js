const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

const Campus = db.define("Campus", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: "image",
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
    },
});

module.exports = Campus;