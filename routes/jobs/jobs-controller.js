const JobService = require("../../database/service/Job");
module.exports = {
    getJobs(req, res) {
        return JobService.getJobs()
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({ message: "Something went wrong" });
            });
    },
    getJobDetails(req, res) {
        return JobService.getJobDetails(req.params.jobId)
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({ message: "Something went wrong" });
            });
    },
    applyJob(req, res) {
        return JobService.applyJob(req.body)
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({ message: "Something went wrong" });
            });
    },
}
