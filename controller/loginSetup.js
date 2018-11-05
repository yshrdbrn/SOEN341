let Console = require('./console');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;;

passport.use(new localStrategy(
    function(username, password, done) {
        user = Console.getUserWithCredentials(username, password);
        if (!user) {
            return done(null, false, { message: 'Incorrect information.' });
        }

        return done(null, user);
    }
  ));

module.exports = passport;
