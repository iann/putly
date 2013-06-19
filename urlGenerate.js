var counter = 0;

function generateUrl(completeURL){
    console.log("generating url for " + completeURL);
	var computedURL = counter;
	counter++;
	
	//TODO: return the generated URL somehow
    return computedURL;
}





/////////////// EXPORTS ///////////////////////
//just export each function that we want to call
exports.generateUrl = generateUrl;
/////////////// EXPORTS ///////////////////////