const express = require('express')
const app = express()

//controllers
const serveStatic = (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
}

app.get('/', serveStatic)

const port = 8080
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
