const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT

app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT)
})