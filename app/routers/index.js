const logger        = require("../../init/logger");

module.exports = function (app) {

  logger.info('[SERVER] Initializing routes');

  require("./api")(app);

};