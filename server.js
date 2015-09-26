/* global process */
var dotenv = require('dotenv').load();
var errorhandler = require('errorhandler');
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));
app.use('/google', require('./routes/google')(app, express));
app.use('/smarty-streets', require('./routes/smarty-streets')(app, express));
app.use(errorhandler());

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('smartystreets-vs-googlemaps app listening at http(s)://%s:%s', host, port);
});