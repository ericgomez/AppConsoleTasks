require('colors');

const showMenu = () => {

  return new Promise( (resolve, reject) => {

    console.clear();
    console.log('==================='.green);
    console.log(' Select one option '.green);
    console.log('===================\n'.green);
  
    console.log(`${ '1.'.green } Create homework`);
    console.log(`${ '2.'.green } List homework`);
    console.log(`${ '3.'.green } List homework completed`);
    console.log(`${ '4.'.green } List homework pendent`);
    console.log(`${ '5.'.green } Complete homework(s)`);
    console.log(`${ '6.'.green } Delete homework`);
    console.log(`${ '0.'.green } Exit \n`);
  
    const readline = require('readline').createInterface ({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question('Selected one option: ', (opt) => {
      // Cuando no estemos utilizando mas el readline tenemos que cerrarlo para que no se quede esperando
      readline.close();
      resolve(opt);
    });
  });
}


const pause = () => {

  return new Promise( (resolve, reject) => {
    const readline = require('readline').createInterface ({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question(`\nPress ${ 'ENTER'.green } to continue\n`, (opt) => {
      // Cuando no estemos utilizando mas el readline tenemos que cerrarlo para que no se quede esperando
      readline.close();
      resolve();
    });
  });
}

module.exports = {
  showMenu,
  pause
}