const net = require('net');

const { IP, PORT,playerName} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", () => {//when connection is established
    console.log("Successfully connected!!")
    conn.write(`Name: ${playerName}`)//writing  my initials to the object in the server
    //conn.write("Move: up")
    //conn.write("Move: down")
  })
  // setTimeout(() =>(conn.write("Move: up"),1000))
  // setTimeout(() =>(conn.write("Move: up"),4000))
  //setInterval(() => conn.write("Move: up"), 50)
  conn.on('data', (data) => {
    console.log('message from server: ', data);


  });

  return conn;
}

module.exports = { connect }