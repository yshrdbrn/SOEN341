let Console = require('../controller/console');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;;

passport.use(new localStrategy(
    function(email, password, done) {
         Console.getUserWithCredentials(email, password,function(user){
           //console.log(user);
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
