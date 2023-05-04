const express = require("express");
const pug = require("pug");
const path = require("path");
const viewRoutes = require("./router/viewRoutes");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

app.get("/", viewRoutes);

module.exports = app;
