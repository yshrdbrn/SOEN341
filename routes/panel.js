var express = require('express');
var router = express.Router();

var Console = require('../controller/console');
var helper = require('../helperFunctions/checkAuthentication');

router.use('/panel',
    helper.checkIfUserIsLoggedIn,
)

router.get('/panel',
    function(req, res) {
        // console.log('in panel:');
         //console.log(req.user.isadmin);
         //console.log(req.user.isadmin);
        res.locals.isadmin = req.user.isadmin;
        res.render('panel');
    }
);

router.get('/panel/registerAdmin',
    helper.checkIfUserIsAdmin,
    function(req, res) {
        res.locals.message = req.flash('error');
        res.render('registerAdmin');
    }
);

router.post('/panel/registerAdmin',
    helper.checkIfUserIsAdmin,
    function(req, res) {
        info = {
          
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
        }
        if(Console.addNewAdmin(info)){
            res.redirect('/panel');

        }else{
            req.flash('error','User with this username already exists')
            res.redirect('/panel/registerAdmin')
        }
    }
);

router.get('/panel/usersList',
    helper.checkIfUserIsAdmin,
    function(req, res) {
        Console.getUsersList(function(userList){
            res.locals.users = userList;
            res.render('usersList');
        });

    }
);

module.exports = router;
