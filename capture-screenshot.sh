#!/bin/bash
TMPFILE=$(mktemp -t tmpXXXXXXXXXX.png)
echo $TMPFILE
node_modules/phantomjs/bin/phantomjs --ignore-ssl-errors=true --ssl-protocol=any --debug=true capture-screenshot.js $1 $TMPFILE
js email-task.js
