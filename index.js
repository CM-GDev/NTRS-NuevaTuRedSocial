// unpacking express from express
const express = require('express');

//importing database
const db = require('./config/connection');
//importing routes
const routes = require('./routes');

//process.cwd() is used to get the Current Working Directory of the node.js process
const cwd = process.cwd();

//establishing which port to use for running our server/hosting our application
const PORT = process.env.port || 3001;
//establishing server
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('NTRS-NUEVATUREDSOCIAL')
  ? cwd.split('/NTRS-NUEVATUREDSOCIAL/')[1]
  : cwd;

//unpacking express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using our routes on this server
app.use(routes);

//message to let us know server is live
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});

