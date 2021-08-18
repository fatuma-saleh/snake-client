const net = require('net');
const { IP, PORT, playerName } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("connect", () => {
    console.log("Successfully connected!!");
    console.log(`Name: ${playerName}`)
  });
  conn.on('data', (data) => {
    console.log('message from server: ', data);
  });

  return conn;
};

module.exports = { connect };