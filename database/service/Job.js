const JobInitializer = require("../model/Job");
const JobUserInitializer = require("../model/Job-User");
const { _s } = require("../sequelize-connection");

module.exports = {

    addJob(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await _s.transaction(async (t) => {
                    const Job = JobInitializer;
                    await Job.create(data, { transaction: t });
                });
                resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    },

    getJobs() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await _s.transaction(async (t) => {
                    const Job = JobInitializer;
                    return await Job.findAndCountAll({ transaction: t });
                });
                resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    },
    getJobDetails(jobId) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await _s.transaction(async (t) => {
                    const Job = JobInitializer;
                    return await Job.findOne({ transaction: t, where: { id: jobId } });
                });
                resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    },
    applyJob(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await _s.transaction(async (t) => {
                    const JobUser = JobUserInitializer;
                    console.log(data);
                    return await JobUser.create(data, { transaction: t });
                });
                resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    }
}