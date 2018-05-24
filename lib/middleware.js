const logger        = require( "../init/logger");
const utils         = require( "../lib/utils");

let secure = function (req, res, next) {

	let authToken = req.headers['x-authtoken'];

	if(!authToken || !utils.isSafe(authToken) ){
		logger.warn("Middleware Warning: "+JSON.stringify(req.headers)+" unresolved token");
		return res.status(400).send();
	}else{
		
		if(authToken === 'denemeolduguicinstatic'){
			next();
		}else{
			logger.warn("Client Not Found Token: "+authToken);
			return res.status(400).send();
		}

	}
};

module.exports = {
	secure
};