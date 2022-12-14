const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
// Always require and config near top of file
require('dotenv').config()
//Connect to db
require('./config/database')

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
// Middle to check/verify a JWT and 
// and assign user obj to req.user
app.use(require('./config/check-token'))

const port = process.env.PORT || 3001;

//Put API routes here, before the 'catch all'
app.use('/api/users', require('./routes/api/users'))

//The following 'catch-all' route(not the *) is necessary
//to return the index.html on all non AJAX requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
