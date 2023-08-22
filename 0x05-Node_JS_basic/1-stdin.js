const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.once('line', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
