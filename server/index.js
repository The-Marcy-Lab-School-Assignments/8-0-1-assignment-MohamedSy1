const express = require("express")
const path = require('path')
const app = express()

const pathToDistFolder = path.join(__dirname, '..', 'path', 'to', 'front-end', 'dist')

const serveStatic = express.static(pathToDistFolder)

app.use(serveStatic)
const port = 8080
app.listen(port, () => { console.log(`this is the port: ${port}`) })