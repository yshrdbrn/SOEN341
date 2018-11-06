var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('./helperFunctions/loginSetup');
var flash = require('connect-flash');
var logger = require('morgan');

var main = require('./routes/main');
var panel = require('./routes/panel');
var catalog = require('./routes/catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

// Set up session and passport
let secret = 'soen341'
app.use(cookieParser(secret));
app.use(session({ secret: secret,
                  saveUninitialized: true,
                  resave: true}));
app.use(passport.initialize());
app.use(passport.session());


// Set up routes
app.use(main);
app.use(panel);
app.use(catalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
