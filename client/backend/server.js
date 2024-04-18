/* eslint-disable no-undef */

const express = require("express")
const cors = require("cors")

const blogUploader = require('./blogUploader')

const router = express.Router()
const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.use('/', router)

// ACTIONS:

router.post('/getNames', blogUploader.getBlogName)
router.post('/getNamesDescriptionsAndDates', blogUploader.getBlogNameDescriptionAndDate)
router.post('/getBlog', blogUploader.getBlog)