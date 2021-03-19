const express = require('express');
const fs = require('fs');
const path = require('path');
const database = require("./db/db")

// Express App setup
const app = express();
const PORT = process.env.PORT || 3000;

// Data parsing setup
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Notes html and it's "url"
app.get("./notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/Develop/notes.html"));
})

//Route
require('../Develop/Routes/routes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT );

});
    

