//data structure to hold url
var urlMap = {};

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});

db = new Db('putly', server);

db.open(function (err, db) {
    if (!err) {
        console.log("Connected to 'putly' database");
       
    }
});

function getUrl(response, target){
    console.log("Fetching url for " + target);
    //TODO: update lastHitTime and hits 
	var longUrl;
	db.collection('urls', function (err, collection) {
		collection.findOne({}, {fields:{shortName:target}},function(err,doc){	
			console.log(err);
			
			longUrl = doc.url;
			console.log(doc);
			//console.log(response);
			response.redirect(longUrl);
			return doc;
		});
	});
}

function addUrl(shortName , url){
    console.log("Attempting to add url for " + shortName + " : "+url);
	db.collection('urls', function (err, collection) {
		collection.insert(
			{shortName:shortName , url:url , hits: 1, creationTime:Date.now(), lastHitTime:Date.now()}
		);
	}); 
} 

function getAll(){
    return urlMap;
}


/////////////// EXPORTS ///////////////////////
//THESE NEED TO MAP TO EXACTLY TO A REQUEST/POST HANDLER ABOVE
//just export each function that we want to call
exports.getUrl = getUrl;
exports.addUrl = addUrl;
exports.getAll = getAll;
/////////////// EXPORTS ///////////////////////