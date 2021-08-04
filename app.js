require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

console.clear();

const main = async () => {
  console.log('Hola Mundo.');

  let opt = '';
  const tasks = new Tasks();

  do {

    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Description: ' );
        tasks.createTask( description );
        break;
      case '2':
        console.log( tasks._listing );
        break;
    }

    if (opt !== '0') await pause();

  } while (opt !== '0');

}

main();