const express = require('express');
const app = express();

const dotenv = require ("dotenv");
dotenv.config();

const port = process.env.PORT || 8000;
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

const mongoose = require('mongoose');
mongoose.connect(process.env.DB, {useNewUrlParser: true,useUnifiedTopology: true }); 
console.log("we're connected!");

//MOTEUR TEMPLATE
app.set('view engine','ejs');

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//STATIC (CSS,JS...)
app.use('/public',express.static('public'));


app.get("/",(req, res) => {
    res.render("index-v2");
});

app.get("/translate",(req, res) => {
    res.render("translate-v2");
});


app.listen(port);

console.log('serveur fonctionne sur port',port);

//MESSAGES Contact
const mail= process.env.MAIL
const pass= process.env.PASS

app.post("/msg", (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mail,
            pass: pass
        }
    });      

    transporter.sendMail({
        from: mail,
        to: "makrai.yassin@gmail.com",
        subject: `Message de ${req.body.email}`,
        text: req.body.message,
    }, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect("back");
});

//Recommendation
app.post("/recommend", (req, res) => {

    
    res.redirect("back");
});


