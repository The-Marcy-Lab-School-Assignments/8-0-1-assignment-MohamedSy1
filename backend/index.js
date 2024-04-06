const express = require("express");
const path = require("path");
const app = express();

const pathToDistFolder = path.join(__dirname, "..", "front-end", "dist");

app.use(express.static(pathToDistFolder));

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
