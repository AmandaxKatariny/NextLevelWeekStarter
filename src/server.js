const express = require("express")
const server = express()

//configure public path
server.use(express.static("public"))

//using template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//Configure my application paths
//home page
// req: requisition
// res: answer
server.get("/", (req, res) => {
    // res.send("I got here - hello intruder");
    // res.sendFile(__dirname + "/views/index.html");
    res.render("index.html", {
        title: "TESTE nunjucks - Seu marketplace de coleta de resíduos"
    });
})

server.get("/create-point", (req, res) => {
    res.render("create-point.html");

});

server.get("/search", (req, res) => {
    res.render("search-results.html");
});

//connect server
server.listen(3000)