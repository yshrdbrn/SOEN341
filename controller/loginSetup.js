let Console = require('./console');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;;

passport.use(new localStrategy(
    function(username, password, done) {
        user = Console.getUserWithCredentials(username, password);
        console.log(user.username);
        if (!user) {
            return done(null, false, { message: 'Incorrect information.' });
        }

        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    console.log("serialize:")
    console.log(user.id);
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    console.log("deserialize:")
    console.log(id);
    user = Console.findUser(id);
    console.log(user.username);
    done(null, user);
});

module.exports = passport;
