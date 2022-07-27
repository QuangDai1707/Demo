const express = require("express");
const bodyParser = require("body-parser")
const checkLogin = require("./middlewares/checkLogin")
const cookieParser = require('cookie-parser');

var app= express()
app.set('view engine', 'ejs').set('views', __dirname + '/views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/',checkLogin,(req,res)=>{
    res.render('index')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/authenticate',(req,res)=>{
    if(req.body.password=='abc')
    {
        res.cookie('login',{expires: 5000 + Date.now()});
        res.redirect('/');
    }
})
app.listen(8080, (err) => {
    console.log("listen at port 8080");
  })