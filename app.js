require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer')
const Task = require('./models/task')
const Tasks = require('./models/tasks')

console.clear();

const main = async () => {
  console.log('Hola Mundo.');

  let opt = '';

  do {

    /*opt = await inquirerMenu();
    console.log({opt});*/

    const tasks = new Tasks();
    const task = new Task('buy food');

    tasks._listing[task.id] = task;
    console.log(tasks)

    if (opt !== '0') await pause();

  } while (opt !== '0');

}

main();