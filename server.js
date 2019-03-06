const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser Middleware 
app.use(bodyParser.json());

//DB Config
const db = require('./config/key').mongoURI;

//Connect to Mongo 
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected.....'))
.catch(err => console.log(err));


const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
