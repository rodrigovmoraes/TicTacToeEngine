#!/usr/bin/env node
/*****************************************************************************
********************** START APPLICATION SCRIPT ******************************
/*****************************************************************************/
var debug = require('debug')('Express4');

/*****************************************************************************
*************************** DEPENDENCIES SECTION *****************************
******************************* (LIBS MODULES) *******************************
/*****************************************************************************/
require('dotenv').load();
var express = require('express');
var path = require('path');
var fs = require('fs');
var opener = null;
if(app.get('env') === 'development') {
   opener = opener("http://localhost:" + server.address().port);
}

/*****************************************************************************
*************************** DEPENDENCIES SECTION *****************************
******************************* (APPS MODULES) *******************************
/*****************************************************************************/

//-----------------------------------------------------------------------------
var app = express();

app.set('view engine', 'html');    // use .html extension for templates
app.set('views', path.join(__dirname, 'appViews'));
app.engine('html', require('hogan-express'));

/*****************************************************************************
********************* MIDDLEWARES CONFIG SECTION *****************************
/*****************************************************************************/
app.use(express.static(path.join(__dirname, 'app')));

/*****************************************************************************
************************ ERROR HANDLING  SECTION *****************************
/*****************************************************************************/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/*****************************************************************************
***************************** APP CONFIG SECTION *****************************
/*****************************************************************************/
//...
//..
//.

/*****************************************************************************
************************** ERROR HANDLING SECTION ****************************
/*****************************************************************************/
// development error handler
// it prints stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err.toString(),
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
  //open in the browser
  if(app.get('env') === 'development') {
     opener("http://localhost:" + server.address().port);
  }
});
