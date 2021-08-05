require('colors');

const { saveDB, readDB } = require('./helpers/SaveFile');
const { inquirerMenu, pause, readInput, deleteTaskList, confirm } = require('./helpers/inquirer')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

console.clear();

const main = async () => {

  let opt = '';
  const tasks = new Tasks();

  const tasksDB = readDB();

  if ( tasksDB ) {
    tasks.loadTasksFromArray( tasksDB ); 
  }

  do {

    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Description: ' );
        tasks.createTask( description );
        break;
      case '2':
        tasks.listingComplete() ;
        break;
      case '3':
        tasks.listingPendingCompleted(true) ;
        break;
      case '4':
        tasks.listingPendingCompleted(false) ;
        break;
      case '6':
        const id = await deleteTaskList( tasks.listingTasks );
        if ( id !== '0' ) {    
          const question = await confirm('¿ you\'re sure ?')
          
          if (question) {
            tasks.deleteTask(id)
            console.log('Task deleted');
          }
        }
        break;
    }

    saveDB( tasks.listingTasks );

    if (opt !== '0') await pause();

  } while (opt !== '0');

}

main();