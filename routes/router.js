var express = require('express');
var router = express.Router();
var passport = require('passport');

var Console = require('../controller/console');

router.get('/login',
    function(req, res, next) {
        res.locals.message = req.flash('error');
        console.log(req.flash('error'));
        res.render('login');
    }
);

router.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                    failureRedirect: '/login',
                                    failureFlash: true }),
);

router.get('/',
    function(req, res, next) {
        res.render('index', { title: 'Express' });
    }
);

module.exports = router;