
# email-screenshot

`node.js` script which takes a screenshots of web pages and emails them to
specified email addresses.

## Requirements

`node.js` must be installed.

## Installation

```
git clone https://github.com/MangoTheCat/email-screenshot.git
cd email-screenshot
npm install --global .
```

## Usage

```
$ email-screenshot --help

  Take a screenshot of a web page and send it in email.

  Usage
    $ email-screenshot <urls> <email-addresses>

  Parameters starting with http:// or http:// are treated as URLs,
  others are treated as email addresses. The order of URLs and
  email addresses is ignored.

  Options
    --help      Show this help message.
    --host      Mail server host name [localhost].
    --port      Mail server port [25].
    --secure    Whether mail server requires SSL [false].
    --user      Username for mail server authentication [none].
    --pass      Password for mail server authentication [none].
    --from      The sender of the email [none].
    --subject   Mail subject [Dashboard screenshot].

  Examples
    $ email-screenshot https://cnn.com http://att.com x@ac.me y@ac.me

```

## Running from `cron`

The script can be run periodically using the `cron` utility, an
example `crontab` file is included in the repository, you can install it
with `crontab crontab`. See `man 5 crontab` and `man 1 crontab` for more.

## License

MIT @ AT&T
