exports.checkIfUserIsLoggedIn = function(req, res, next) {
    if (req.user) {
        res.locals.isadmin = req.user.isadmin
        next();
    }
    else {
        res.locals.message = "User not logged in";
        res.render('error');
    }
};

exports.checkIfUserIsAdmin = function(req, res, next) {
    if (req.user.isadmin) {
        next();
    }
    else {
        res.locals.message = "User is not admin";
        res.render('error');
    }
};
