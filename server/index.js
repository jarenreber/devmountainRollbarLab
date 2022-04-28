const express = require('express')
const path = require('path')

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join('../server', '../client'))
})

const port = process.env.PORT || 4646



app.listen(port, () => {
    console.log(`Beam me up ${4646}`)
})