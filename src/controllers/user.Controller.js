const userModel = require("../models/user.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "DEMOAPIAPP";

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const exsistingUser = await userModel.findOne({ email: email });

    if (exsistingUser) {
      return res.status(400).json({ message: "User Already Exsists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);

    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(201).json("Some thing went wrong !!!");
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exsistingUser = await userModel.findOne({ email: email });

    if (!exsistingUser) {
      return res.status(400).json({ message: "User Not Found " });
    }

    const matchPassword = await bcrypt.compare(
      password,
      exsistingUser.password
    );

    if (!matchPassword) {
      return res.status(400).json({ message: "In Valid Crentials" });
    }

    const token = jwt.sign(
      { email: exsistingUser.email, id: exsistingUser._id },
      SECRET_KEY
    );

    res.status(201).json({ user: exsistingUser, token: token });
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(201).json("Some thing went wrong !!!");
  }
};

module.exports = { signin, signup };