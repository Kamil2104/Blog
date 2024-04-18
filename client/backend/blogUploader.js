/* eslint-disable no-undef */

const blogdb = require("./connection")

class BlogUploader {
    getBlogName(req, res) {
        const query = "SELECT name FROM blogs ORDER BY date DESC"

        blogdb.query(query, (err, data) => {
            if (err) {
                console.log(err)
            }

            if (data.length > 0) {
                return res.json(data)
            } else {
                return res.json("Error")
            }
        })
    }

    getBlogNameDescriptionAndDate(req, res) {
        const query = "SELECT name, description, date FROM blogs ORDER BY date DESC"

        blogdb.query(query, (err, data) => {
            if (err) {
                console.log(err)
            }

            if (data.length > 0) {
                return res.json(data)
            } else {
                return res.json("Error")
            }
        })
    }

    getBlog(req, res) {
        const query = "SELECT * FROM blogs WHERE name = ?"
        const values = [
            req.body.name
        ]

        blogdb.query(query, values, (err, data) => {
            if (err) {
                console.log(err)
            }

            if (data.length > 0) {
                return res.json(data)
            } else {
                return res.json("Error")
            }
        })
    }
}

module.exports = new BlogUploader()