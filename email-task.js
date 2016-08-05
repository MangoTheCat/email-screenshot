var system = require('system');
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://paulin.shek%40gmail.com:MYPASSWORD@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Paulin Shek" <paulin.shek@gmail.com>', // sender address
    to: 'pshek@mango-solutions.com', // list of receivers
    subject: 'Test test test', // Subject line
    html: '<img src="cid:screenshot">', // html body
    attachments: [{ 
        filename: "screenshot.png",
        path: system.args[1],
        cid: "screenshot"
    }]
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

