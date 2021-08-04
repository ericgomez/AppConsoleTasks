const { v4: uuidv4 } = require('uuid');
const Task = require('./task');

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

  createTask( description = '' ) {
    const task = new Task(description);
    this._listing[ task.id ] = task;
  }

} 

module.exports = Tasks;