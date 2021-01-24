const express = require('express');
const app = express();

const dotenv = require ("dotenv");
dotenv.config();

const port = 8000;
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

//MOTEUR TEMPLATE
app.set('view engine','ejs');

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//STATIC (CSS,JS...)
app.use('/public',express.static('public'));


app.get("/",(req, res) => {
    res.render("index");
});

app.listen(port);

console.log('serveur ok');

//MESSAGES
const mail= "aylin.wehner@ethereal.email" //process.env.MAIL
const pass= "bcABeMRE6Tw6kjge3A" //process.env.PASS

app.post("/msg", (req, res) => {

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: mail,
    //         pass: pass
    //     }
    // });      

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
          user: mail,
          pass: pass,
        }
    })

    transporter.sendMail({
            from: process.env.MAIL,
            to: "makrai.yassin@gmail.com", 
            subject: `Message de ${req.body.email}`, 
            text: req.body.message, 
    });

    res.redirect("back");
});

