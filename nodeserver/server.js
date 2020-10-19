
const express = require('express');

// Constants
const PORT = 8000;

// Internally, docker defaults to 0.0.0.0 for localhost inside the container
// See: https://docs.docker.com/network/iptables/#setting-the-default-bind-address-for-containers
const CONTAINER_HOST = '0.0.0.0';

// The docker host defaults to 127.0.0.1, or localhost
const PUBLIC_HOST = 'localhost';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, CONTAINER_HOST);
console.log(`Running on http://${PUBLIC_HOST}:${PORT}`);
