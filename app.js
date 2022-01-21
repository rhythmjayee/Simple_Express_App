const express = require("express");

const app = express();

app.get("/", (rep, res) => {
    res.send("<h1>Hello World!!!</h1>");
});

app.get("*", (rep, res) => {
    res.send("<h1> <b>404</b> <br> We DONT do THIS here !!! Better to put right URL</h1></h1>");
});

app.listen(5000, () => {
    console.log("Server started");
});

