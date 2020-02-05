const express = require('express');
const app = express();
const path = require('path');
const workController = require('./controller/work-controller');
const contriController = require('./controller/contribution-controller');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/',(req,res)=> {
    res.redirect('/home');
});

app.get('/home',(req,res)=> {
    res.render('main', {title: 'RGV'});
});

app.get('/work', (req, res) => {
    workController(req,res);
});

app.get('/contribution', (req,res) => {
    contriController(req,res);
});

app.get('/contact', (req,res) => {
    res.render('contact', {title: 'CONTACT'});
});

app.get('*', (req,res) => {
    res.render('error', {title: '404'});
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`));


