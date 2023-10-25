const express = require('express');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//loading envs
require('dotenv').config();
const port = process.env.port;

//import from DB
require('./config/mongoose.config');

//require the routes at the end to run
require("./routes/joke.routes")(app);

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));