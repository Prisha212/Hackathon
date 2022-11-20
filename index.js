var express = require('express');
var app = express();

// var mongoose = require("mongoose");
// mongoose.connect();

app.get('/', function(req,res) {
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000);