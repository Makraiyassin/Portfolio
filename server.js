const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//MOTEUR TEMPLATE
app.set('view engine','ejs');

//STATIC (CSS,JS...)
app.use('/public',express.static('public'));


app.get("/",(req, res) => {
    res.render("index");
});

app.listen(port);

console.log('serveur ok');

