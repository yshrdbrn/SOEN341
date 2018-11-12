let Console = require('../controller/console');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function(username, password, done) {
        Console.getUserWithCredentials(username, password, function(user){
            if (!user) {
                return done(null, false, { message: 'Incorrect information.' });
            }
            Console.login(user);
            return done(null, user);
        });

    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    user = Console.findUser(id);
    done(null, user);
});

module.exports = passport;
