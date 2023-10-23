const { Router } = require("express");
const { getJobDetails, getJobs, applyJob } = require("./jobs-controller");

const jobRouter = new Router();

jobRouter.get("/jobs", (req, res) => {
    getJobs(req, res);
});

jobRouter.get("/jobs/:jobId", (req, res) => {
    getJobDetails(req, res);
});

jobRouter.post("/jobs/apply", (req, res) => {
    applyJob(req, res);
});

module.exports = jobRouter;
