const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json());
app.use(express.static("express"));
app.use(express.static(__dirname + "/public"));
app.get("/", async (request, response) => {
    response.render("FertileFarms.ejs", {
    });
  }
);
module.exports = app;