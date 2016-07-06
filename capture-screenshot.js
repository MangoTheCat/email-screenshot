var page = require('webpage').create();

var myUrl = 'http://www.google.com';

page.open(myUrl, function(){
	setTimeout(function(){
		page.render('screenshot.png');
		phantom.exit();
	}, 10000);
})
