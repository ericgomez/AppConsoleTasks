require('colors');

const { saveDB, readDB } = require('./helpers/SaveFile');
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

console.clear();

const main = async () => {

  let opt = '';
  const tasks = new Tasks();

  const tasksDB = readDB();

  if ( tasksDB ) {
    
  }

  // if (opt !== '0') await pause();

  do {

    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Description: ' );
        tasks.createTask( description );
        break;
      case '2':
        console.log( tasks.listingTasks );
        break;
    }

    saveDB( tasks.listingTasks );

    if (opt !== '0') await pause();

  } while (opt !== '0');

}

main();