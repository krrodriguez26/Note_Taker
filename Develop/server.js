const express = require('express');
const fs = require('fs');
const path = require('path');

// Express App setup
const app = express();
const PORT = process.env.PORT || 3000;

// Data parsing setup
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

//Route
require('../Develop/Routes/routes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT );

});
    

