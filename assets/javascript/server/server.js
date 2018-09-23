//STILL WORKING ON IT
//CURRENTLY USING LOCAL HOST
//var http = require("http");
//var fs = require("fs");
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
var router = express.Router();
var path = require('path');
//var mailPORT = 465;
var smtpTransport = require('nodemailer-smtp-transport');
//var server = http.createServer(request);
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('new2-site'));



// dynamic webserver
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '../../../../index.html'));
});

app.listen(8080, function(){
  console.log("listening on 8080")
});



/*
// POST route from contact form working w/ postman
app.post('/contact', function (req, res) {
    var newemail = req.body;
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: "samgminton@gmail.com",
        pass: "Littlebigplanet1"
      },
      tls: {
          rejectUnauthorized: false
      }
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: "samgminton@gmail.com",
      subject: 'New message from contact form',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        res.render('contact-failure');
      }
      else {
        res.render('contact-success');
        console.log("success")
      }
    });
  });
  app.listen(mailPORT, function() {
    console.log("App listening on PORT " + PORT);
  });

*/
