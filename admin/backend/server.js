/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");

const router = express.Router();
const PORT = 3001;

const actions = require('./actions')

const app = express();
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log("Listening on port:",`${PORT}`)
})

app.use('/', router);

// Actions

router.post('/login', actions.authentication)

router.post('/logOut', actions.logOut)

router.post('/loggedIn', actions.loggedIn)