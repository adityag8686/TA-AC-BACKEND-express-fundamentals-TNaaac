var express = require("express");

var app = express();

app.use((req,res,next) => {
    console.log(req.method,req.url)
    next();
})
app.use(express.json());

app.use(express.static(__dirname,"/public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(4000, () => {
    console.log("Listnening on port 4k");
});