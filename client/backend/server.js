/* eslint-disable no-undef */

const express = require("express")
const cors = require("cors")

const router = express.Router()
const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})