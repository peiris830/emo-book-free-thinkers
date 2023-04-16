const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.post('/users', userController.createUser);

router.post('/signup', userController.signup);

router.put('/users/:id', userController.updateUserById);

router.delete('/users/:id', userController.deleteUserById);

/*router.post('/login', passport.authenticate('local'), function(req, res) => {
    res.json({
        token: req.user.generateAuthToken()
    });
}));*/

router.post('/login', passport.authenticate('local'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json({ message: 'Login successful.' });
});

module.exports = router;