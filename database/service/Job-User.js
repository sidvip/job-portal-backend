const JobUserIntializer = require("../model/Job-User");
const { _s } = require("../sequelize-connection");

module.exports = {

    // addUser(data) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const result = await _s.transaction(async (t) => {
    //                 const JobUser = JobUserIntializer;
    //                 await JobUser.create(data);
    //             });
    //             resolve(result);
    //         } catch (err) {
    //             reject(err);
    //         }
    //     })
    // },
}