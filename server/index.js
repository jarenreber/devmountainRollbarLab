const express = require('express')
const path = require('path')

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || 4646

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'eacb71e48ab747d0adb5e82a7524c00f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get('/styles', (req, res) => {
    res. sendFile(path.join(__dirname, '../client/styles.css'))
    rollbar.info('css file served')
})

app.listen(port, () => {
    console.log(`Beam me up ${4646}`)
})