require('colors');

const { showMenu, pause } = require('./helpers/messages')

console.clear();

const main = () => {
  console.log('Hola Mundo.');

  showMenu();

  pause();
}

main();