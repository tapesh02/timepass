const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const newUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    retypePassword: {
        type: String,
        required: true,
    },
});

newUserSchema.pre("save", async function (next) {
    if (this.isModified("cpassword")) {
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
        this.retypePassword = await bcrypt.hash(this.retypePassword, 12);
    }
    next();
});

const User = mongoose.model("newUser", newUserSchema);

module.exports = User;
