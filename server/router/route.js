const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

require("../db/connection");
const User = require("../model/newUserSchema");
const Auth = require("../middleware/auth");

// router.get("/", (req, res) => {
//     res.send("hello am backend sever");
// });

//Signup or  Register Part
router.post("/signup", async (req, res) => {
    const { username, email, cpassword, retypePassword } = req.body;

    if (!username || !email || !cpassword || !retypePassword) {
        return res.status(422).json({ error: "please enter valid details" });
    }

    try {
        const UserExist = await User.findOne({ email: email });

        if (UserExist) {
            return res.status(422).json({ error: "email already exist" });
        } else if (cpassword !== retypePassword) {
            return res.status(422).json({ error: "password incorrect" });
        } else {
            const user = new User({
                username,
                email,
                cpassword,
                retypePassword,
            });

            const userResgister = await user.save();

            if (userResgister) {
                return res.status(201).json({ message: "signup successfully" });
            }
        }
    } catch (error) {
        console.log(error);
    }
});

//Login Part
router.post("/signin", async (req, res) => {
    try {
        const { email, cpassword } = req.body;

        if (!email || !cpassword) {
            return res.status(400).json({ error: " please enter valid credentials" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(cpassword, userLogin.cpassword);

            const token = await userLogin.generateAuthToken();
            console.log("token ", token);

            res.cookie("signinToken", token, {
                expires: new Date(Date.now() + 25892000000),
            });

            if (isMatch) {
                return res.status(200).json({ message: "sigin in scuccessfully" });
            } else {
                return res.status(400).json({ error: " Invalid credentials" });
            }
        } else {
            return res.status(400).json({ error: "  Invalid credentials " });
        }
    } catch (error) {
        console.log(error);
    }
});

//Watchlist  Part
router.get("/watchlist", Auth, (req, res) => {
    res.send(req.rootuser);
});

//Signout  Part
router.get("/signout", (req, res) => {
    res.clearCookie("signinToken", { path: "/" });
    res.status(200).send("signed out");
});

module.exports = router;
