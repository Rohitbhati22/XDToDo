const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res)
{
    let opt = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    today = today.toLocaleDateString("en-US", opt);
    data =  {
        'date' : today,
    }
    res.render("index", data);
});

app.get('/about', function(req, res)
{
    res.render("about");
});

app.get('/help', function(req, res)
{
    res.render("help");
});

app.get('/privacy', function(req, res)
{
    res.render("privacy");
});


app.listen(3000, ()=>{
    console.log("Runing");
});