const { DataTypes } = require("sequelize");
const { _s } = require("../sequelize-connection");

const attributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
};

const options = {
    tableName: "job-user",
};

const JobUserInitializer = _s.define(
    'JobUser',
    attributes,
    options,
);
module.exports = JobUserInitializer;
