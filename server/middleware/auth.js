const jwt = require("jsonwebtoken");
const User = require("../model/newUserSchema");

const Auth = async (req, res, next) => {
    try {
        const token = req.cookies.signinToken;
        if (!token) {
            console.log("no token found");
            return res.sendStatus(403);
        }
        const verifytoken = jwt.verify(token, process.env.SECRETKEY);

        const rootuser = await User.findOne({ _id: verifytoken._id, "tokens.token": token });

        if (!rootuser) {
            throw new Error("user not found");
        }

        req.token = token;
        req.rootuser = rootuser;
        req.UserID = rootuser._id;

        next();
    } catch (error) {
        res.status(401).send("Unauthorized access: token not found");
        console.log(error);
    }
};

module.exports = Auth;
