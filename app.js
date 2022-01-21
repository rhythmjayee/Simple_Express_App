const express = require("express")
const helmet = require("helmet");



const app = express();


app.use(helmet());

app.get("/home", (rep, res) => {
    res.send("<h1>Hello World!!!</h1>");
});

app.get("/", (rep, res) => {
    res.send("<h1>We DONT so THIS here !!! Better to put right URL</h1></h1>");
});

app.listen(5000, () => {
    console.log("Server started");
});

