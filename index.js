var express = require('express');
var app = express();
const csvtojson = require('csvtojson');
var port = process.env.PORT || 3000;

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root@123',
    database: 'cmpe280'
})

app.get('/', function(req,res) {
    res.sendFile(__dirname+'/index.html');
})

app.get('/imports', function(req,res) {
    res.sendFile(__dirname+'/imports.html');
})

connection.connect(function(error) {
    if(error) throw error;
    else {
        console.log("Connected to Database");
    }
})
  
app.listen(port,function(){
    console.log("Express server listening");
  });