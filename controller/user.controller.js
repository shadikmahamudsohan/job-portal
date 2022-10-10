const services = require("../service/user.service");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
    try {
        const user = await services.signupService(req.body);
        const token = generateToken(user);
        res.status(200).json({
            status: "Successfully signed in",
            token: token,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            error: error.message
        });
    }
};
exports.singIn = async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await services.getUserService(email);
        if (!user) {
            return res.status(401).json({
                status: "Fail",
                error: "your don't have an account"
            });
        }
        const isPasswordValid = user.comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({
                status: "fail",
                error: "Password is not correct",
            });
        }
        const token = generateToken(user);

        res.status(200).json({
            status: "Successfully signed in",
            token: token,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            error
        });
    }
};

exports.getMe = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await services.getUserService(email);

        res.status(200).json({
            status: "success",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
