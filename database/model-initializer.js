const JobInitializer = require("./model/Job");
const JobUserInitializer = require("./model/Job-User");
const UserInitializer = require("./model/User");

async function initializeModels() {
    await JobInitializer.sync({ alter: true });
    await JobUserInitializer.sync({ alter: true });
    await UserInitializer.sync({ alter: true });
}

module.exports = initializeModels;
