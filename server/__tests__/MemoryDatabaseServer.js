const { MongoMemoryServer } = require('mongodb-memory-server');

class MemoryDatabaseServer {
  mongod;
  constructor() {
    this.mongod = new MongoMemoryServer({
      binary: {
        version: '5.0.2',
      },
      autoStart: false,
    });
  }

  start() {
    return this.mongod.start();
  }

  stop() {
    return this.mongod.stop();
  }

  getUri() {
    return this.mongod.getUri();
  }
}

module.exports = new MemoryDatabaseServer();
