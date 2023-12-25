const express = require("express");

const app = express();

app.get("/", (req, res) => res.end("API is running..."));

app.listen(5000, console.log("Server started at PORT 5000..."));
