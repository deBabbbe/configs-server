"use strict";

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const configs = JSON.parse(JSON.stringify(require("./configEntries.json")));

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(configs));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default function handler(_, res) {
  return res.send(configs);
}
