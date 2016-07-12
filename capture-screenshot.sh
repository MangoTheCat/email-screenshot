TMPFILE=$mktemp
echo $TMPFILE
"C:\Users\pshek\Documents\phantomjs-2.1.1-windows\bin\phantomjs.exe" --ignore-ssl-errors=true --ssl-protocol=any --debug=true capture-screenshot.js $1 $TMPFILE
##echo "A screenshot of RCAP dashboard, sent automatically" | mail -s "RCAP dashboard update" -A $TMPFILE $2