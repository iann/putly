var data = require('./urlData');

/////////////// REQUEST HANDLERS ///////////////////////
function setlink(request, response){
    console.log("Request handler ’SETLINK’ was called.");
    
    //farm the params
    var shortname = request.params.shortname;
    var completeURL = request.params.completeurl;
    var added = data.addUrl(shortname,completeURL);
    console.log("INPUT: " + shortname + " : " + completeURL+" was added " + added);
    
    //TODO: do something useful
    response.end("link set to " + completeURL);
    return;
}


function set(request, response){
    console.log("Request handler ’SET’ was called.");
    
    //farm the params
	//see if we are posted first
	if(req.body){
		//its a post jim!
		console.log("SET with POST method.");
	} else {
		var completeURL = request.params.completeurl;		
		//generate the shortURL
		//TODO: add in the generate tools
		var shortURL = generateURL(completeURL);
		var added = data.addUrl(shortURL,completeURL);
		console.log(completeURL+" was added " + added);
    }
		
    //TODO: return JSON for requested URL and shortened URL
	var rObj = {input:completeURL, output:shortURL};
    response.json(rObj);
    return;
}

function getlinks(request, response){
    console.log("Request handler ’GETLINKS’ was called.");
    
    
    response.json(data.getAll());
    
}


function sendredirect(request, response){
    console.log("Request handler ’SENDREDIRECT’ was called.");
    
    //farm the params
    var shortname = request.params.shortname;
    var urlData = data.getUrl(shortname);
    console.log(urlData.url);
    response.redirect(urlData.url);
    //TODO: do something useful
    //response.end("consider yourself redirected to " + redirectUrl + "...");
    return;
}

/////////////// REQUEST HANDLERS ///////////////////////





/////////////// EXPORTS ///////////////////////
//THESE NEED TO MAP TO EXACTLY TO A REQUEST/POST HANDLER ABOVE
//just export each function that we want to call
exports.setlink = setlink;
exports.getlinks = getlinks;
exports.sendredirect = sendredirect;
/////////////// EXPORTS ///////////////////////