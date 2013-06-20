var data = require('./urlData');
var urlGenerator = require('./urlGenerate');

/////////////// REQUEST HANDLERS ///////////////////////
function setlink(request, response){
    console.log("Request handler ’SETLINK’ was called.");
    
	//we want to return a JSON string
	var rObj = {};
	
    //farm the params
	//see if we are posted first
	if(request.body.input){
		//its a post jim!
		console.log("SET with POST method.");
		console.log(request.body.input);
		
		var urlList = request.body.input;
		
		//TODO:
		//loop through the input field (JSON list of URLs)
		//    {input:["url", "url", "url"]}
		//decode them
		//shorten each one
		//add it to the dB
		//add it to the return object
		
		
		//respond with a JSON block
		//TODO: write in the post handler code to deal with responses
		rObj = {info:"this is the POST, write better code here"};
	} else {
		var completeURL = request.params.completeurl;
		
		//TODO: add in the generate tools
		var shortURL = urlGenerator.generateUrl(completeURL);
		
		var added = data.addUrl(shortURL,completeURL);
		console.log(completeURL+" was added " + added);
		
		//respond with a JSON block
		rObj = {input:completeURL, output:shortURL};
	}
	
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
    console.log(urlData);
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