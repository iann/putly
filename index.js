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


//ask for a new link to be created, should return the link you asked for and the link you got
app.get('/s/:completeurl', function(req, res){
	console.log(req);
    handle.setlink(req, res);
});

//ask for a new link to be created, should return the link you asked for and the link you got
//when you hit this with a post, it should expect a JSON object as input
//app.post('/set/', function(req, res){
//    handle.set(req, res);
//});







//TODO: add optional parameter for searching for a short link
app.get('/getlinks', function(req, res){
    handle.getlinks(req, res);
});


app.get('/go/:shortname', function(req, res){
    handle.sendredirect(req, res);
});

//end routes



//start er up
app.listen(process.env.PORT || 8080);


//fall through for all errors, just put them to stdout
process.on('uncaughtException', function(err) {
  console.log(err);
});