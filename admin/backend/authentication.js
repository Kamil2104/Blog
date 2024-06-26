/* eslint-disable no-undef */

const blogdb = require('./connection')

class Authentication {
    logIn(req, res) {
        const loginQuery = "SELECT * FROM admin WHERE `login` = ?"
        const passwordQuery = "SELECT * FROM admin WHERE `login` = ? AND `password` = ?"
        const setLoggedQuery = "UPDATE `admin` SET `logged` = 1 WHERE `login` = 'admin'"
    
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
                        blogdb.query(setLoggedQuery, (err, data) => {
                            if (err) {
                                return res.json("Error")
                            }

                            if (data.affectedRows > 0) {
                                return res.json ("Success")
                            } else {
                                return res.json ("Error")
                            }
                        })
                    } else {
                        return res.json("Invalid password")
                    }
                })
            } else {
                return res.json("Invalid login")
            }
        });
    }

    logOut(req, res) {
        const query = "UPDATE `admin` SET `logged` = 0 WHERE `login` = 'admin'";

        blogdb.query(query, (err, data) => {
            if (err) {
                return res.json("Error")
            }

            if (data.affectedRows > 0) {
                return res.json("Success")
            } else {
                return res.json("Fail")
            }
        }) 
    }

    loggedIn(req, res) {
        const query = "SELECT * FROM `admin` WHERE `logged` = true" 
    
        blogdb.query(query, (err, data) => {
            if (err) {
                return res.json("Error")
            }

            if (data.length > 0) {
                return res.json("Success")
            } else {
                return res.json("Fail")
            }
        })
    }
}

module.exports = new Authentication()