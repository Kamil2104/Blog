/* eslint-disable no-undef */

const blogdb = require('./connection');

class BlogManagement {
    addBlog(req, res) {
        const nameQuery = "INSERT INTO blogs(name) VALUES(?)";
        const valuesForNameQuery = [
            req.body.name
        ]

        blogdb.query(nameQuery, valuesForNameQuery, (err) => {
            if (err) {
                return res.json("Error (name)")
            }

            // We use req.file.buffer because the file is sent as a 'file' object (using multer)
            const blogQuery = "UPDATE blogs SET `description` = ?, `photo` = ?, `date` = ? WHERE `name` = ?"
            const valuesForBlogQuery = [req.body.description, req.file.buffer, req.body.date, req.body.name]

            blogdb.query(blogQuery, valuesForBlogQuery, (err, data) => {
                if (err) {
                    return res.json("Error (adding blog)" + err)
                }

                if (data.affectedRows > 0) {
                    return res.json("Success")
                } else {
                    return res.json("Error (adding blog)")
                }
            });
        });
    }

    displayBlogsNames(req, res) {
        const query = "SELECT name FROM blogs ORDER BY date DESC"

        blogdb.query(query, (err, data) => {
            if (err) {
                console.log(err)
            } 

            if (data.length === 0) {
                return res.json("No blogs available")
            } else  if (data.length > 0) {
                return res.json(data)
            } else{
                return res.json("Error")
            }
        })
    }

    deleteBlog(req, res) {
        const query = "DELETE FROM blogs WHERE `name` = ?"
        const values = [
            req.body.name
        ]

        blogdb.query(query, values, (err, data) => {
            if (err) {
                return res.json("Error")
            }

            if (data.affectedRows > 0) {
                return res.json("Success")
            } else {
                return res.json("Error")
            }
        })
    }

    displayBlogToEdit(req, res) {
        const query = "SELECT name, description, photo FROM blogs WHERE `name` = ?" 
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

module.exports = new BlogManagement();
