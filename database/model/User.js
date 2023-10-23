const { DataTypes } = require("sequelize");
const { _s } = require("../sequelize-connection");

const attributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

const options = {
    tableName: "user",
};

const UserInitializer = _s.define(
    'User',
    attributes,
    options,
);
module.exports = UserInitializer;
