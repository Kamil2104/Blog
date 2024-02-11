/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");

const router = express.Router();
const PORT = 3001;

const authentication = require('./authentication')

const app = express();
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log("Listening on port:",`${PORT}`)
})

app.use('/', router);

// Actions

router.post('/login', authentication.logIn)

router.post('/logOut', authentication.logOut)

router.post('/loggedIn', authentication.loggedIn)