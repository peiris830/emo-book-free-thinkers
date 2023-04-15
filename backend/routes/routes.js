const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const passport = require("passport");

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.post('/users', userController.createUser);

router.post('/signup', userController.signup);

router.put('/users/:id', userController.updateUserById);

router.delete('/users/:id', userController.deleteUserById);

router.post('/login', passport.authenticate('local', (req, res) => {
    res.json({
        token: req.user.generateAuthToken()
    })
}));

module.exports = router;