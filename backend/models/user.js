const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
    resetToken: String,
    resetTokenExpiration: Date,

});

const User = mongoose.model('User', userSchema);

module.exports = User;