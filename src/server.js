const express = require("express")
const server = express()

// get the database
const db = require("./database/db")

//configure public path
server.use(express.static("public"))

//Enable the use of req.body in our application
server.use(express.urlencoded({ extended: true }))
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
    // req.query: Query Strings the URL
    // console.log(req.query);
    res.render("create-point.html");

});

server.post("/save-point", (req, res) => {
    //req.body: body of our form
    // console.log(req.body);

    //insert data into the database
    const query = `
                INSERT INTO places (
                    image,
                    name, 
                    address,
                    address2,
                    state,
                    city, 
                    items
                ) VALUES (?,?,?,?,?,?,?);`;

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com Sucesso");
        console.log(this);

        // return res.send("Ok")
        return res.render("create-point.html", { saved: true })
    }
    db.run(query, values, afterInsertData)


});

server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        //empty search
        return res.render("search-results.html", {
            total: 0
        });
    }

    // const query = `SELECT * FROM places WHERE city = '${search}'`;
    const query = `SELECT * FROM places WHERE city LIKE '%${search}%'`;

    // get data from the database]
    db.all(query, function(err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão os seus registros");
        console.log(rows);
        const total = rows.length
            // show the html page with the data from the database
        return res.render("search-results.html", {
            places: rows,
            total: total
        });

    })
});

//connect server
server.listen(3000)