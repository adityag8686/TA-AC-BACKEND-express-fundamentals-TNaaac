var express = require("express");
var app = express();
var logger = require("morgan");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extend:false}))


app.use((req, res, next) => {
    // if requested url is /admin throw error
    if (req.url === "admin") {
        return next("Unauthorized");
    }
    // other let it pass to next middleware by simply calling next()
    next();
});
app.get("/",(req,res)=>{
    res.send("welcome")
})

app.get("/about",(req,res)=>{
    res.send("this is about page");
})

app.use((req,res,next) =>{
    res.send("Page not found");
})
app.use((err,req,res,next) =>{
    res.send(err);
})

app.listen(3000, () => {
    console.log("listening on port 3k")
});