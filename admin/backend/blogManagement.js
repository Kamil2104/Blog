/* eslint-disable no-undef */

const blogdb = require('./connection');

class BlogManagement {
    addBlog(req, res) {
        const nameQuery = "INSERT INTO blogs(name) VALUES(?)";
        const valuesForNameQuery = [req.body.name];

        blogdb.query(nameQuery, valuesForNameQuery, (err) => {
            if (err) {
                return res.json("Error (name)");
            }

            // Używamy req.file.buffer, ponieważ plik jest przesyłany jako obiekt 'file' (za pomocą multer)
            const blogQuery = "UPDATE blogs SET `description` = ?, `photo` = ? WHERE `name` = ?";
            const valuesForBlogQuery = [req.body.description, req.file.buffer, req.body.name];

            blogdb.query(blogQuery, valuesForBlogQuery, (err, data) => {
                if (err) {
                    return res.json("Error (adding blog)" + err);
                }

                if (data.affectedRows > 0) {
                    return res.json("Success");
                } else {
                    return res.json("Error (adding blog)");
                }
            });
        });
    }
}

module.exports = new BlogManagement();
