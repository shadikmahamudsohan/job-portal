const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: (value) =>
                validator.isStrongPassword(value, {
                    minLength: 6,
                }),
            message: "Password {VALUE} is not strong enough.",
        },
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password {VALUE} don't match!",
        },
    },

    role: {
        type: String,
        enum: ["candidate", "hiringManager", "admin"],
        default: "candidate",
    },

    confirmationToken: String,
    confirmationTokenExpires: Date,

    passwordChangedAt: Date,

}, {
    timestamps: true
});

userSchema.pre("save", function (next) {
    const password = this.password;
    const hashedPassword = bcrypt.hashSync(password);
    this.password = hashedPassword;
    this.confirmPassword = undefined;

    const email = this.email;

    if (email === "admin@gmail.com") {
        this.role = "admin";
    } else {
        this.role = "candidate";
    }

    next();
});

userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt.compareSync(password, hash);
    return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;