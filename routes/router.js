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
    function(req, res, next) {
        // console.log(req);
        next();
    },
    passport.authenticate('local', { successRedirect: '/',
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
        res.redirect('login');
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

module.exports = router;