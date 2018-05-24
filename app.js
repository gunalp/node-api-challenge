// <editor-fold> desc="Require Functions"
const _env    = process.env.APP_PLATFORM || "local";
const config  = require("./config/" + _env + ".js");
const logger  = require("./init/logger");
const async   = require("async");
const server  = require("./init/server");
const router  = require("./app/routers/index");
// </editor-fold>

logger.info("[APP] Starting server initialization");

async.series(
  [
    (initServer = callback => {
      server(config,app => {
        router(app);
        callback();
      })
    })
  ],
  err => {
    if (err) {
      logger.error("[APP] initialization failed "+ err);
    } else {
      logger.info("[APP] initialized SUCCESSFULLY");
    }
  }
);
