//basic node imports
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');


//link evrything together through the app veriable
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//api url
var api = '/request'

//get function
app.get(api, function(req, res, next) {

    var ipaddress = req.ip;
    var language = req.acceptsLanguages();
    var software = req.get('User-Agent');


    res.json({ "ipaddress": ipaddress, "language": language[0], "software": software, })
});



//listening port
app.listen(300, function() {
    console.log("working");
});