const UserService = require("../../database/service/User");
module.exports = {
    getUsers(req, res) {
        return UserService.getUsers()
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({ message: "Something went wrong" });
            });
    },
}
