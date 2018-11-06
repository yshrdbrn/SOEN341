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
        // console.log(req.user.isAdmin);
        res.locals.isAdmin = req.user.isAdmin;
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
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
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
        userList = Console.getUsersList();
        res.locals.users = userList;
        res.render('usersList');
    }
);

module.exports = router;