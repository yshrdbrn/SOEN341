var express = require('express');
var router = express.Router();
var passport = require('passport');

var Console = require('../controller/console');

router.get('/login',
    function(req, res, next) {
        res.locals.message = req.flash('error');
        // console.log(req.flash('error'));
        res.render('login');
    }
);

router.post('/login',
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


router.get('/',
    function(req, res, next) {
        res.render('index', { title: 'Library Management System' });
    }
);


router.get('/logout', function(req, res) {
    req.logout();
    Console.logout(req.user);
    res.redirect('/');
});




module.exports = router;