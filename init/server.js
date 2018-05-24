// <editor-fold> desc="Require Functions"
const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const logger        = require("./logger");
const helmet        = require('helmet');
// </editor-fold>

const app = express();

module.exports = function (config,callback) {
	app.disable('etag');
	app.use(helmet());
  app.use(morgan('[:date[iso]] :method :url :status'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static(__dirname + '/../public'));
	app.use(function (req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
		res.setHeader('Access-Control-Allow-Headers', 'authorization','content-type');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});
  logger.info('[SERVER] Initializing express');

  // Error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err.message
    });
    next(err);
  });

  app.listen(config.server.port, function(){
    logger.info('[EXPRESS] '+ config.server.port);
    callback(app);
  });


};