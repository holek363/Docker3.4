const express = require('express');
const os = require('os');
const app = express();

const VERSION = process.env.APP_VERSION || "unknown";

app.get('/', (req, res) => {
  const serverInfo = {
    ip: req.socket.localAddress,
    hostname: os.hostname(),
    version: VERSION
  };
  res.json(serverInfo);
});

