var express = require('express');
var router = express.Router();
var passport = require('passport');

var Console = require('../controller/console');

let checkIfUserIsLoggedIn = function(req, res, next) {
    if (req.user) {
        next();
    }
    else {
        res.locals.message = "User not logged in";
        res.render('error');
    }
};

let checkIfUserIsAdmin = function(req, res, next) {
    if (req.user.isAdmin) {
        next();
    }
    else {
        res.locals.message = "User is not admin";
        res.render('error');
    }
};

router.get('/login',
    function(req, res, next) {
        res.locals.message = req.flash('error');
        // console.log(req.flash('error'));
        res.render('login');
    }
);

router.post('/login',
    function(req, res, next) {
        // console.log(req);
        next();
    },
    passport.authenticate('local', { successRedirect: '/panel',
                                    failureRedirect: '/login',
                                    failureFlash: true }),
);

router.get('/register',
    function(req, res) {
        res.locals.message = req.flash('error');
        res.render('register');
    }
);

router.get('/panel/registerAdmin',
    checkIfUserIsLoggedIn,
    checkIfUserIsAdmin,
    function(req, res) {
        res.locals.message = req.flash('error');
        res.render('registerAdmin');
    }
);

router.post('/register',
    function(req, res) {
        info = {
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
        }

        if (Console.registerClient(info)) {
            res.redirect('/login');
        } else {
            req.flash('error', 'User with this username already exists')
            res.redirect('/register');
        }
    }
);

router.post('/panel/registerAdmin',
    checkIfUserIsLoggedIn,
    checkIfUserIsAdmin,
    function(req, res) {
        info = {
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
        }
<<<<<<< HEAD
        if(Console.addNewAdmin(info)){
            res.redirect('/panel');
            
        }else{
            req.flash('error','User with this username already exists')
            res.redirect('/panel/registerAdmin')
        }
=======

        Console.addNewAdmin(info);
        console.log("hello");
        res.redirect('/panel');
>>>>>>> 766e3f3c7ebacdde43aac6d0757743aa1fd669c2
    }
);

router.get('/',
    function(req, res, next) {
        res.render('index', { title: 'Express' });
    }
);


router.get('/panel',
    checkIfUserIsLoggedIn,
    function(req, res) {
        console.log('in panel:');
        console.log(req.user.isAdmin);
        res.locals.isAdmin = req.user.isAdmin;
        res.render('panel');
    }
);

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/panel/usersList',
    checkIfUserIsLoggedIn,
    checkIfUserIsAdmin,
    function(req, res) {
        userList = Console.getUsersList();
        res.locals.users = userList;
        res.render('usersList');
    }
);


module.exports = router;