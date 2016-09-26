var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish(path.join(__dirname, 'dist'), function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log("===============");
		console.log("Deployed!");
		console.log("===============");
	}
});