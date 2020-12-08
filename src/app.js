const express = require("express");
const routes = require("./routes");

require("./database");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");

      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );

      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

// export default new App().server;
module.exports = new App().server;
