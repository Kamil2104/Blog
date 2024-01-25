const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const PORT = 3001;

const app = express();
app.use(express.json())
app.use(cors())

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

app.listen(PORT, () => {
    console.log("Listening on port:",`${PORT}`)
})