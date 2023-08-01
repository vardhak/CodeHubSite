const express = require("express");
const fs = require("fs");
const hbs = require("hbs");
const path = require("path");

const app = express();

const port = 80;
const hostname = "0.0.0.0";

app.use(express.static("public"));

// const partials_path = path.join(__dirname, "/partials");
const partials_path = "public/partials"

app.set("view engine", "hbs");

hbs.registerPartials(partials_path);


const jsonData = JSON.parse(fs.readFileSync("public/data/data.json", "utf-8"));


app.get("/", (req, res) => {
    res.render("home", {
        title: "Vijay community",
        services_cards: jsonData,
    });
})

app.get("/about.hbs", (req, res) => {
    res.render("about");
})

app.get("*", (req, res) => {
    res.render("404");
})

app.listen(port, hostname, () => {
    console.log(`listening to port ${port}....`);
})