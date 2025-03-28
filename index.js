const express = require('express');
const os = require('os');
const app = express();

const VERSION = process.env.APP_VERSION || "1.0.0";

app.get('/', (req, res) => {
  const serverIP = Object.values(os.networkInterfaces())
    .flat()
    .find(iface => iface.family === 'IPv4' && !iface.internal)?.address || 'unknown';
  const hostname = os.hostname();

  res.send(`
    <h1>Informacje o serwerze</h1>
    <p><strong>Adres IP:</strong> ${serverIP}</p>
    <p><strong>Nazwa serwera:</strong> ${hostname}</p>
    <p><strong>Wersja aplikacji:</strong> ${version}</p>
  `);
});

app.listen(8080, () => {
  console.log(`Listening on port 8080, version: ${version}`);
});
