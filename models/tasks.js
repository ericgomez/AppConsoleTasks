const { v4: uuidv4 } = require('uuid');

class Tasks {
  _listing = {};

  constructor() {
    this._listing = {};
  }

}

module.exports = Tasks;