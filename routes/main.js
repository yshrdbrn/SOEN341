var express = require('express');
var router = express.Router();
var passport = require('passport');

var Console = require('../controller/console');

router.get('/login',
    function(req, res, next) {
        res.locals.message = req.flash('error');
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


router.post('/register',function(req, res) {
        Console.registerClient(req.body,function(success){
          if (success) {
            res.redirect('/login');
          } else {
              req.flash('error', 'User with this username already exists')
              res.redirect('/register');
            }
        });
    }
);


router.get('/',
    function(req, res, next) {
        res.render('index', { title: 'Library Management System' });
    }
);


router.get('/logout', function(req, res) {
    Console.logout(req.user, function() {
      req.logout();
      res.redirect('/');
    });
});




module.exports = router;
