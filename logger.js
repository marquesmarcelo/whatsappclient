const log4js = require("log4js");
class Logger {
    constructor() {
        log4js.configure({
            appenders: {
              console: { type: "console" },
              app: { type: "file", filename: "application.log" },
            },
            categories: {
              default: { appenders: ["console"], level: "trace" },
              catA: { appenders: ["console"], level: "error" },
              "catA.catB": { appenders: ["app"], level: "trace" },
            },
          });
     }
     getLogger() {
        return log4js.getLogger("catA.catB");
     }
  }
  module.exports = Logger; 
