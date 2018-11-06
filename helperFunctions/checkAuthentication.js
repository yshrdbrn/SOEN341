exports.checkIfUserIsLoggedIn = function(req, res, next) {
    if (req.user) {
        next();
    }
    else {
        res.locals.message = "User not logged in";
        res.render('error');
    }
};

exports.checkIfUserIsAdmin = function(req, res, next) {
    if (req.user.isAdmin) {
        next();
    }
    else {
        res.locals.message = "User is not admin";
        res.render('error');
    }
};