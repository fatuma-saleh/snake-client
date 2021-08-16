const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

//function call
setupInput(connect());
