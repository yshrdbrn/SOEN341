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
    if (Console.isAdmin(req.user)) {
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
        res.render('register');
    }
);

router.get('/panel/registerAdmin',
    function(req, res) {
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

        Console.registerClient(info);
        res.redirect('/login');
    }
);

router.post('/panel/registerAdmin',
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

        Console.registerAdmin(info);
        res.redirect('/panel');
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


module.exports = router;