var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogsRouter = require('./routes/blogs');
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3000"
};


var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// private route

ACCESS_TOKEN_SECRET = 'Custy Crew';

app.use('/blogs', validateUser, blogsRouter);
function validateUser(req, res, next) {
    jwt.verify(
        req.headers['x-access-token'],
        ACCESS_TOKEN_SECRET,
        function (err, decoded) {
            console.log(req.headers['x-access-token'])
            if (err) {
                console.log(err)
                res.status(400).json({ status: 'error', message: err.message, data: null });
            } else {

                // add user id to request
                req.body.email = decoded.user;
                console.log("Requester email: "+JSON.stringify(decoded));
                next();
          }
        }
    );
}
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
