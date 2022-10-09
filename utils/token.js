const jwt = require('jsonwebtoken');

exports.generateToken = (userData) => {
    const payload = {
        email: userData.email,
        role: userData.role
    };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET);

    return token;
};