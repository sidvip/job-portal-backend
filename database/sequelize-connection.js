const path = require("path");
const Sequelize = require("sequelize");

const ENV = process.env.NODE_ENV;
const ENV_PATH = path.resolve(__dirname, "../", `.env`);
const {
    parsed: {
        root,
        port,
        database,
        username,
        password,
        dialect,
    },
} = require("dotenv")
    .config({ path: ENV_PATH });


module.exports = {
    _s: new Sequelize({
        root: root,
        port: port,
        database: database,
        username: username,
        password: password,
        dialect: dialect,
    })
};
