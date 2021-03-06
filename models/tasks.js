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

  listingPendingCompleted( completed = true ) {

    console.log();
    let idx = 0;  
    this.listingTasks.forEach( task => {
      
      const { description, completedIn } = task;

      const state = (completedIn) 
                      ? `${ completedIn }`.green 
                      : 'Pending'.red;

      if ( completed ) {
        // Show Completed
        if (completedIn) {
          idx += 1;
          console.log(`${ (idx + '.').green } ${ description } :: ${ state }`);
        }

      } else {
        // Show Pending
        if (!completedIn) {
          idx += 1;
          console.log(`${ (idx + '.').green } ${ description } :: ${ state }`);
        }
      }
      
    })

  }

  deleteTask ( id = '' ) {
    if ( this._listing[id] ) {
      delete this._listing[id];
    }
  }

  toggleCompleted( ids = []) {

    ids.forEach(id => {
      const task = this._listing[id];
      if ( !task.completedIn ) {
        task.completedIn = new Date().toISOString();
      }
    })

    this.listingTasks.forEach ( task => {
      if ( !ids.includes(task.id) ) {
        this._listing[task.id].completedIn = null;
      }
    })

  }

} 

module.exports = Tasks;