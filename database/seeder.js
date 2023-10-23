const JobService = require("./service/Job");
const UserService = require("./service/User");


module.exports = {
    async jobSeed() {
        await JobService.addJob({ title: "Software Engineer", description: "It is a Junior Level Role" });
        await JobService.addJob({ title: "Software Engineer II", description: "It is a Mid-Senior Level Role" });
        await JobService.addJob({ title: "Software Engineer III", description: "It is a Architect Level Role" });
        await JobService.addJob({ title: "Member of Technical Staff", description: "It is a role of 10+years of experience" });
        await JobService.addJob({ title: "Member of Technical Staff II", description: "It is a role of 12+years of experience" });
    },
    async userSeed() {
        await UserService.addUser({ name: "Andy", role: "Intern" });
        await UserService.addUser({ name: "Bob", role: "SDE" });
        await UserService.addUser({ name: "Cindy", role: "QA" });
        await UserService.addUser({ name: "Derrick", role: "Eng. Manager" });
        await UserService.addUser({ name: "Emy", role: "Senior Engineer" });
    },
}