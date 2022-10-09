const User = require("../models/User");

exports.signupService = async (data) => {
    return await User.create(data);
};
exports.getUserService = async (email) => {
    console.log(email);
    return await User.findOne({ email });
};