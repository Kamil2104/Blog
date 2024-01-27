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

app.post('/login', (req, res) => {
    const loginQuery = "SELECT * FROM admin WHERE `login` = ?"
    const passwordQuery = "SELECT * FROM admin WHERE `login` = ? AND `password` = ?"

    const values = [
        req.body.login,
        req.body.password
    ]

    blogdb.query(loginQuery, values[0], (err, data) => {
        if (err) {
            return res.json("Error")
        }

        if (data.length > 0) {
            blogdb.query(passwordQuery, values, (err, data) => {
                if (err) {
                    return res.json("Error")
                }

                if (data.length > 0) {
                    return res.json("Success")
                } else {
                    return res.json("Invalid password")
                }
            })
        } else {
            return res.json("Invalid login")
        }
    });
})