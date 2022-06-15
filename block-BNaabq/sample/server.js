var express = require("express");
var app = express();
var logger = require('morgan')
var cookieParser = require('cookie-parser');


app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next) => {
    console.log(req.cookies)
})

app.use("/about",(req,res,next) => {
    res.cookie("username", "aditya");
    res.end('About Page')
})

app.get('/', (req,res) =>{
    res.send("sending the cookies to the client")
})


app.listen(4000, () =>{
    console.log("server listening on port 4000")
})
