// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();

//import reverseString
var Util = require('./util');
var reverseString = Util.reverseString;

var bodyParser = require('body-parser');

//defines what happens when it receives the 'GET /' request
app.get('/', function (req, res) {
 res.send('Hello World!');
});

//starts the server on port 3000:
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

app.use(bodyParser.text());
// Handle POST /reverse [data]
app.post('/reverse', function (req, res) {
    // If the request came with text, then the text() middleware handled it
    // and made `req.body` a string.
    // Check that req.body is a string.
    if (typeof(req.body) === 'string') {
        var reversed = reverseString(req.body);
        res.send(reversed);
    }
    else {
    // POST did not contain a string. Send an error code back!
      res.status(400).end();
    }
});
