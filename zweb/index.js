const express = require("express");
const path = require("path");

const app = express();

let publicPath = path.join(__dirname, "public")

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found<h1>');
})

app.listen(3000, () => {
    console.log("Hosting on port 3000");
})