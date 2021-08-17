let connection;
const { moves, playerName } = require('./constants');
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if (moves[key]) {
      connection.write(moves[key])
    } else {
      console.log("Wrong key")
    }

  });

  handleUserInput(conn);
  return stdin;
}

const handleUserInput = function (conn) {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      conn.write(`Exit ${playerName}`)
      process.exit();
    }
  })

}

module.exports = { setupInput }