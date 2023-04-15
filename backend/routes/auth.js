const jwt = require('jsonwebtoken');
const path = require("path");

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

/*exports.login = async (req, res) => {
    const token = jwt.sign({ _id: req.user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
}*/

function generateAuthToken(user) {
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    user.tokens = user.tokens.concat({ token });

    user.save();

    return token;
}

module.exports = generateAuthToken;

