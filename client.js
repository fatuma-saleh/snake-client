const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });


  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("connect", () => {//when connection is established
    console.log("Successfully connected!!")
    conn.write("Name: FSS")
    conn.write("Move: up")
  })
  conn.on('data', (data) => {
    console.log('message from server: ', data);

  });
  return conn;
}

module.exports = { connect }