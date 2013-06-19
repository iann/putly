//data structure to hold url
var urlMap = {};

function getUrl(shortName){
    console.log("Fetching url for " + shortName);
    //TODO: update lastHitTime and hits 
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