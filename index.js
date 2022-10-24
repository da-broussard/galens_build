const express = require('express');
const server= express();
const cors= require("cors");
const morgan= require('morgan');
const apiRouter = require('./api');
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use('/api', apiRouter);

// server.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
  
  //error handler may go here!!!!!!!
  
  // bring in the DB connection
  const { client } = require('./db');
  
  // connect to the server
  const PORT = process.env.PORT || 4000;
  
  // define a server handle to close open tcp connection after unit tests have run
  const handle = server.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}!`);
  
    try {
      await client.connect();
      console.log('Database is open for business!');
    } catch (error) {
      console.error('Database is closed for repairs!\n', error);
    }
  });
  
  // export server and handle for routes/*.test.js
  module.exports = { server, handle };
