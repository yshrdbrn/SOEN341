let Console = require('./console');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;;

passport.use(new localStrategy(
    function(username, password, done) {
        user = Console.getUserWithCredentials(username, password);
        if (!user) {
            return done(null, false, { message: 'Incorrect information.' });
        }

        Console.login(user);
        return done(null, user);
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
