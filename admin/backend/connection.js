/* eslint-disable no-undef */

const mysql = require("mysql");

const blogdb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogdb"
})

blogdb.connect((err) => {
    if (err) {
        console.log(err.message)
    } 
})

module.exports = blogdb