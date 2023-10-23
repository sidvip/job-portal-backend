const { Router } = require("express");
const { getUsers } = require("./users-controller");

const userRouter = new Router();

userRouter.get("/users", (req, res) => {
    getUsers(req, res);
});

module.exports = userRouter;
