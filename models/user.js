module.exports = class User {
    constructor() {
        this.router = require('express').Router();
        this.userController = require('../controllers/user');
        this.router.get('/login', this.userController.getLogin);
        this.router.post('/login', this.userController.postLogin);
        this.router.post('/logout', this.userController.postLogout);
        this.router.get('/signup', this.userController.getSignup);
        this.router.post('/signup', this.userController.postSignup);
        this.router.get('/reset', this.userController.getReset);
        this.router.post('/reset', this.userController.postReset);
        this.router.get('/reset/:token', this.userController.getNewPassword);
        this.router.post('/new-password', this.userController.postNewPassword);
    }

    static saveUser() {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
    }

    static getUser() {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
    }
    
}