var page = require('webpage').create();
page.open('http://127.0.0.1:8080/shared.R/rcloud.rcap/rcap.html?notebook=5ddb400c76148387d79c2b5328d39a47', function(){
	page.render('screenshot.png');
	phantom.exit();
})