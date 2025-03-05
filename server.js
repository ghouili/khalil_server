const express = require("express");

const UserRourtes = require('./routes/user')

const port = 4000;

const server = express();

server.use('/user', UserRourtes)    

server.listen(port, () => {
  console.log(`server is rnning successfully on port ${port}`);
});
