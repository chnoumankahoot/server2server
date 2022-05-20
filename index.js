const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;
 const path = require('path');
var key = fs.readFileSync(path.join(path.resolve('.'), '/certs/key.key'));
var cert = fs.readFileSync(path.join(path.resolve('.'), '/certs/cert.crt'));
var options = {
  key: key,
  cert: cert
};

app = express()
app.get('/', (req, res) => {
   res.send('Now using https..');
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});