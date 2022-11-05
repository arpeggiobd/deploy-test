const express = require("express");
const app = express();
const port = 3000;
const path = require('path')

app.use(express.static("../client/dist"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
