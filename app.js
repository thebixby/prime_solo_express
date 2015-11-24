var express = require('express');
var app = express();
var path = require('path');
var third = require('./modules/third.js');

app.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/static', express.static(__dirname + '/static'));

app.get('/balance', function(req,res,next){
    res.send(third.randomNum());
});

var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});