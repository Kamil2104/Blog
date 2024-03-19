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
                return res.json("Success")
            } else {
                return res.json("Error")
            }
        })
    }
}

module.exports = new BlogUploader()