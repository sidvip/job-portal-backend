const UserInitializer = require("../model/User");
const { _s } = require("../sequelize-connection");

module.exports = {

    addUser(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await _s.transaction(async (t) => {
                    const User = UserInitializer;
                    await User.create(data);
                });
                resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    },

    getUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await _s.transaction(async (t) => {
                    const User = UserInitializer;
                    return await User.findAndCountAll({ transaction: t });
                });
                resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    },
}