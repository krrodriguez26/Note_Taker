const express = require('express');
const fs = require('fs');
const path = require('path');

// Express App set-up
const app = express();
const port = process.env.PORT || 3000;

// Data parsing set-up
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));




//Route
app.get('/',(req,res)=> {
    res.send(app);
});

app.listen(PORT, ()=>{
    Console.log('App is listening on ${PORT}')
});