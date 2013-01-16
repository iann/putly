//data structure to hold url
var urlMap = {};
urlMap['test'] = {shortName:'test' , url:'http://www.google.com', hits: 1, creationTime:Date.now(), lastHitTime:Date.now()};

function getUrl(shortName){
	console.log("Fetching url for " + shortName);
    return urlMap[shortName];
}

function addUrl(shortName , url){
	console.log("Attempting to add url for " + shortName + " : "+url);
	if(urlMap[shortName]===undefined){
		urlMap[shortName] = {shortName:shortName , url:url , hits: 1, creationTime:Date.now(), lastHitTime:Date.now()};
		return true;
	}else{
		return false;
	}
	
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