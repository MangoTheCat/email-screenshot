
var webshot = require('webshot');
var nodemailer = require('nodemailer');
var tmp = require('tmp');
var path = require('path');

function email_screenshot(urls, emails, options) {

    if (!options) { options = { }; }

    var smtpConfig = { };

    smtpConfig.host = options.host ||
	process.env.EMAIL_SCREENSHOT_HOST || 'localhost';
    smtpConfig.port = options.port ||
	process.env.EMAIL_SCREENSHOT_PORT || 25;

    smtpConfig.secure = options.secure;
    if (options.secure === undefined) {
	smtpConfig.secure = process.env.EMAIL_SCREENSHOT_SECURE;
    }
    if (smtpConfig.secure === undefined) {
	smtpConfig.secure = false;
	smtpConfig.ignoreTLS = true;
    }

    smtpConfig.auth = options.auth;
    if (! smtpConfig.auth &&
	process.env.EMAIL_SCREENSHOT_USER &&
	process.env.EMAIL_SCREENSHOT_PASS) {
	smtpConfig.auth = { 'user': process.env.EMAIL_SCREENSHOT_USER,
			    'pass': process.env.EMAIL_SCREENSHOT_PASS };
    }

    // webshot wants this in ms
    var delay = options.delay * 1000 || 30 * 1000;
    var header = options.header || '';
    var windowWidth = options.width || 1800;
    var windowHeight = options.height || 1200;

    var transporter = nodemailer.createTransport(smtpConfig);

    var mailOptions = {
	from: options.from || process.env.EMAIL_SCREENSHOT_FROM || '',
	to: emails.join(', '),
	subject: options.subject || process.env.EMAIL_SCREENSHOT_SUBJECT ||
	    'Dashboard screenshot',
	html: '<p>' + header + '</p><img src="cid:screenshot">'
    };

    urls.forEach(function(url) {

	var tmpName = tmp.tmpNameSync({
	    prefix: 'esc-',
	    postfix: '.png'
	});

	var webshot_options = {
	    shotSize: "all",
	    renderDelay: delay,
	    windowSize: { width: windowWidth, height: windowHeight }
	};

	webshot(url, tmpName, webshot_options, function(err) {

	    if (err) {
		console.log('Cannot capture ' + url + '\n');
		return;
	    }

	    mailOptions.attachments = [{
		'filename': path.basename(tmpName),
		'path': tmpName,
		'cid': 'screenshot'
	    }];

	    transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
		    console.log('Cannot send email');
		    console.log(error);
		} else {
		    console.log('Message sent: ' + info.response);
		}
	    })

	})

    })
}

module.exports = email_screenshot;
