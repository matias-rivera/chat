const express = require('express')

const config = require('./config/app')
const app = express()


app.get('/home', (req, res) => {
    return res.send('Home')
})

app.get('/login', (req, res) => {
    return send('Login screen works now')
})

const port = config.appPort
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})