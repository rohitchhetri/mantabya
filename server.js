const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");

const users = require("./routes/api/users");

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

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 8084;

app.listen(port, () => console.log(`Server started on port ${port}`));
