phantomjs --ignore-ssl-errors=true --ssl-protocol=any --debug=true capture-screenshot.js
echo "A screenshot of RCAP dashboard, sent automatically" | mail -s "RCAP dashboard update" -A "screenshot.png"