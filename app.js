var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');


var mongoose = require ('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/dbpi");

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var EventsRouter = require('./routes/event');
var listeRouter = require('./routes/liste');
var clientRouter = require('./routes/client');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/event', EventsRouter);
app.use('/liste', listeRouter);
app.use('/client', clientRouter);
//app.use(cors())

var cors = require('cors');
app.use(cors());


// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

// const http = require('http');
//
// const server = http.createServer();
//
// server.listen(3000,'localhost', function(error){
//   if(!error)
//     console.log("Server is Listening at Port 3000!");
//   else
//     console.log("Error Occurred");
// });


//app.listen(3000, () => {
  //  console.log("Server is listening on port 3000");})



module.exports = app;
