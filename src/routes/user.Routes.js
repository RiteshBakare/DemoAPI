const express = require("express");
const { signup, signin } = require("../Controllers/user.Controller");
const userRouter = express.Router();

userRouter.post("/signup",signup);

userRouter.post("/signin",signin);


module.exports = userRouter;