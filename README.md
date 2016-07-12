# email-screenshot
Shell script which takes a screenshot of a specific webpage and then emails it to someone.

Can be used in /etc/crontab to schedule the emailing of screenshots. 
For examples of how to do this, see the crontab file in this repo.

## Dependencies

* phantomjs
* mailx 
* postfix (needs to be correctly configured)

## Installation and Usage

```
git clone https://github.com/MangoTheCat/email-screenshot.git

cd email-screenshot

./capture-screenshot.sh <webpage url> <email address>
```


