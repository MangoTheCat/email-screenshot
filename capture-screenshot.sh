#!/bin/bash
TMPFILE=$mktemp
echo $TMPFILE
phantomjs --ignore-ssl-errors=true --ssl-protocol=any --debug=true capture-screenshot.js $1 $TMPFILE
##echo "A screenshot of RCAP dashboard, sent automatically" | mail -s "RCAP dashboard update" -A $TMPFILE $2
