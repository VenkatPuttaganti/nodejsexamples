var express = require('express');
var app = express();

var person = require('./person')

app.use('/', person);
app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000')
})