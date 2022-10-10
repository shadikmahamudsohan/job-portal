const jwt = require('jsonwebtoken');

exports.generateToken = (userData) => {
    const payload = {
        email: userData.email,
        id: userData.id
    };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET);

    return token;
};