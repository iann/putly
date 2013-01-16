//SIMPLE ROUTING TO THE SUBSYSTEMS

var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use("/static", express.static(__dirname + '/static'));

var handle = require('./requestHandlers');

//use the post body interpreter
//app.use(express.bodyParser());

//route events

//ask for a new game to be created
app.get('/setlink/:shortname/:completeurl', function(req, res){
    handle.setlink(req, res);
});


//TODO: add optional parameter for searching for a short link
app.get('/getlinks', function(req, res){
    handle.getlinks(req, res);
});


app.get('/go/:shortname', function(req, res){
    handle.sendredirect(req, res);
});

//end routes



//start er up
app.listen(28943);


//fall through for all errors, just put them to stdout
process.on('uncaughtException', function(err) {
  console.log(err);
});