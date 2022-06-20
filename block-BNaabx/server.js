let express = require("express");
let app = express();
let date = new Date();

// Custom Morgan Logger

app.use((req,res,next) => {
    console.log(req.method + req.url + date)
})

//Custom Middelware like the json()

app.use(myjson);

function myjson(req,res,next){
    let store = "";
    req.on("data", (chunk) => {
        store = store + chunk;
    });
    req.on("end", () =>{
        req.body = store;
        console.log(req.body);
    });
    next();
}

// custom middelware like the static

app.use(customStatic);
function customStatic(req,res,next){
    if (req.url.split(".").pop() === 'css'){
        const cssF = req.url;
        req.sendFile(__dirname + "/public" + cssF);
    }
    if (req.method === "GET" && req.url.split(".").pop() === "jpg") {
        const imageUrl = req.url;
        req.send(__dirname + "/public/" + req.url);
    }
    next();
}

app.listen(1000, () => {
    console.log("server is listening  on the port 1K");
});