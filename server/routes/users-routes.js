const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/getusers", async (req, res) => {
    const users = await User.find({}, "-password")
        .then(() => {
            console.log(" Users displayed successfully");
        })
        .catch(() => {
            console.log("User display unsuccessful");
        });
    require.json({
        users: users.map((user) => {
            user.toObject({
                getters: true,
            });
        }),
    });
});

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
        console.log("User already exists");
    }
    const CreatedUser = new User({
        name,
        email,
        image,
        password,
        places: [],
    });

    const result = await CreatedUser.save()
        .then(() => {
            console.log("SignUp successfully");
        })
        .catch(() => {
            console.log("SignUp unsuccessful");
        });
    require.json({ result: result.toObjec({ getters: true }) });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const LoggedUser = await User.findOne({ email: email })
        .then(() => {
            console.log("Login successfully");
        })
        .catch(() => {
            console.log("Login unsuccessful");
        });

    if (!LoggedUser || LoggedUser.password != password) {
        console.log("invalid credentials");
    }
    res.json({
        message: "Logged in!",
    });
});

module.exports = router;
