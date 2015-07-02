/// <reference path="../typings/tsd.d.ts" />
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello TypeScript');
});
function repeatQuery(req, res) {
    res.json(req.query);
}
app.get('/repeat', repeatQuery);
var port = +process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
