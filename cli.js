#!/usr/bin/env node
'use strict';

var meow = require('meow');
var esc  = require('./');

var cli  = meow({
    help: [
	'Usage',
	'  $ email-screenshot <urls> <email-addresses>',
	'',
	'Parameters starting with http:// or https:// are treated as URLs,',
	'others are treated as email addresses. The order of URLs and',
	'email addresses is ignored.',
	'',
	'Options',
	'  --help      Show this help message.',
	'  --host      Mail server host name [localhost].',
	'  --port      Mail server port [25].',
	'  --secure    Whether mail server requires SSL [false].',
	'  --user      Username for mail server authentication [none].',
	'  --pass      Password for mail server authentication [none].',
	'  --from      The sender of the email [none].',
	'  --subject   Mail subject [Dashboard screenshot].',
	'',
	'Examples',
	'  $ email-screenshot https://cnn.com http://att.com x@ac.me y@ac.me'
    ]
});

var options = { };

['host', 'port', 'secure', 'user', 'pass', 'from', 'subject'].forEach(
    function(x) {
	options[x] = cli.flags[x];
	delete cli.flags[x];
    }
)

var rem = Object.keys(cli.flags);

if (rem.length > 0) {
    console.error("Unknown options: " + rem.join(", "))
    process.exit(1);
}

function is_url(x) {
    return /^https?:\/\//.test(x);
}

var urls   = cli.input.filter(is_url);
var emails = cli.input.filter(function(x) { return !is_url(x); });

if (urls.length == 0) {
    console.error("No URLs found!");
    process.exit(2);
}

if (emails.length == 0) {
    console.error("No email addresses found!");
    process.exit(3);
}

esc(urls, emails, options);
