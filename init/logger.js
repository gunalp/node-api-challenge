const winston = require('winston');
const fs      = require('fs');

const info  = (msg) => {

  if (!fs.existsSync(__dirname + "/../logs/")) {
    try {
      fs.mkdirSync(__dirname + "/../logs");
    } catch (e) {
      throw new Error(e);
    }
  }

  let linfo = new (winston.Logger)({
    transports: [
      new winston.transports.File({
        level: 'info',
        filename: __dirname + '/../logs/info-logs.log',
        json: true,
        handleExceptions: true,
        timestamp:()=>{return new Date().toLocaleString()}
      }),
      new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        colorize: true,
        humanReadableUnhandledException: true,
        timestamp:()=>{return new Date().toLocaleString()}
      })
    ],
    exitOnError: false
  });

  linfo.info(msg);

};

const warn  = (msg) => {

  if (!fs.existsSync(__dirname + "/../logs/")) {
    try {
      fs.mkdirSync(__dirname + "/../logs");
    } catch (e) {
      throw new Error(e);
    }
  }

  let lwarn = new (winston.Logger)({
    transports: [
      new winston.transports.File({
        level: 'warn',
        filename: __dirname + '/../logs/warn-logs.log',
        json: true,
        handleExceptions: true,
        timestamp:()=>{return new Date().toLocaleString()}
      }),
      new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        colorize: true,
        humanReadableUnhandledException: true,
        timestamp:()=>{return new Date().toLocaleString()}
      })
    ],
    exitOnError: false
  });

	lwarn.warn(msg);

};

const error = (msg) => {
  if (!fs.existsSync(__dirname + "/../logs/")) {
    try {
      fs.mkdirSync(__dirname + "/../logs");
    } catch (e) {
      throw new Error(e);
    }
  }

  let lerror = new (winston.Logger)({
    transports: [
      new winston.transports.File({
        level: 'error',
        filename: __dirname + '/../logs/error-logs.log',
        json: true,
        handleExceptions: true,
        timestamp:()=>{return new Date().toLocaleString()}
      }),
      new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        colorize: true,
        humanReadableUnhandledException: true,
        timestamp:()=>{return new Date().toLocaleString()}
      })
    ],
    exitOnError: false
  });

  lerror.error(msg)

};

module.exports = {
  info:info,
  warn:warn,
  error:error
};

