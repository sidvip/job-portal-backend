const { DataTypes } = require("sequelize");
const { _s } = require("../sequelize-connection");

const attributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.TEXT,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

const options = {
    tableName: "job",
};

const JobInitializer = _s.define(
    'Job',
    attributes,
    options,
);
module.exports = JobInitializer;
