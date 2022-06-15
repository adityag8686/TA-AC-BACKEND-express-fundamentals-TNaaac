var express = require("express");
var app = express();
var logger = require('morgan')
var cookieParser = require('cookie-parser');


app.use(logger('dev'));
app.use(cookieParser());
app.use((req,res,next) => {
    res.cookie("username", "aditya");
    next();
})

app.get('/about', (req,res) =>{
    res.send("sending the cookies to the client")
})

app.listen(4000, () =>{
    console.log("server listening on port 4000")
})
