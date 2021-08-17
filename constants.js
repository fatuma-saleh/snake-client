const  IP = "localhost";
const PORT = 50541;
const playerName = process.argv.slice(2);
const moves = { w: 'Move: up', a: 'Move: left', s: 'Move: down', d: 'Move: right', q: 'Say: quitter', o: 'Say: winner', l: 'Say: loser'}

module.exports = {
  IP,
  PORT,
  playerName: playerName[0],
  moves
};