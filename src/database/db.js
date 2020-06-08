// Import a dependency from sqlite3
const sqlite = require("sqlite3").verbose()

// creating the object will do operations in the database
const db = new sqlite.Database("./src/database/database.db")

module.exports = db

//use the database object, for our operations

// db.serialize(() => {
//     //with sql commands i will

//     // // 1 create table
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT 
//     //     );
//     // `)

//     // // 2 insert data into the table
//     // const query = `
//     //         INSERT INTO places (
//     //             image,
//     //             name, 
//     //             address,
//     //             address2,
//     //             state,
//     //             city, 
//     //             items
//     //         ) VALUES (?,?,?,?,?,?,?);`;

//     // const values = [
//     //     "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
//     //     "Papersider",
//     //     "Gruilherme Gemballa, Jardim América",
//     //     "Número 256",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos Eletrônicos, Lâmpadas"
//     // ]

//     // function afterInsertData(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com Sucesso");
//     //     console.log(this);
//     // }
//     // db.run(query, values, afterInsertData)

//     // 3 query data in the table
//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão os seus registros");
//     //     console.log(rows);
//     // })

// //4 delete data from the table
// db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Registros Deletado com sucesso");
// })

// })