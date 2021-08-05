const { v4: uuidv4 } = require('uuid');
const Task = require('./task');

require('colors');

class Tasks {
  _listing = {};

  get listingTasks() {
    const listing = [];
    Object.keys(this._listing).forEach( key => {
      const task = this._listing[key];
      listing.push(task);
    })

    return listing;
  }

  constructor() {
    this._listing = {};
  }

  loadTasksFromArray( tasks = [] ) {
    
    tasks.forEach( task => {
      this._listing[task.id] = task;
    })
  }

  createTask( description = '' ) {
    const task = new Task(description);
    this._listing[ task.id ] = task;
  }

  listingComplete() {
    
    console.log();
    this.listingTasks.forEach( (task, i) => {

      const idx = `${i + 1}`.green;
      const { description, completedIn } = task;

      const state = (completedIn) 
                      ? 'Completed'.green 
                      : 'Pending'.red;

      console.log(`${ idx } ${ description } :: ${ state }`);
    })
  }

} 

module.exports = Tasks;