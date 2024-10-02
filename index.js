const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
    return res.send("Hello from Home page!");
});

app.get("/about", (req, res) => {
    return res.send(
        "Hello " + req.query.name + ", your age is: " + req.query.age
    );
});

app.listen(8000, () => console.log("Server is running on port 8000"));
