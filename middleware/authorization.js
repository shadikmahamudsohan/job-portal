const User = require("../models/User");

module.exports = (...role) => {
    return async (req, res, next) => {
        const email = req.user.email;

        const user = await User.findOne({ email }); // getting the data for user database

        const userRole = user.role;
        if (!role.includes(userRole)) {
            return res.status(403).json({
                status: "fail",
                error: 'Your are not authorized to access this.'
            });
        }
        next();
    };
};