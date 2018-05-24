// <editor-fold> desc="Required Functions"
const sampleData  = require("../models/sample.json");
const logger      = require("../../init/logger");

// </editor-fold>

const getSeries = (req, res) => {
  logger.info("Get Series Fired");
  
	let series = sampleData.entries.filter(function (el) {
		return el.programType === 'series'
	});
	
	res.json({
		count:series.length,
		result: series,
		status: "OK"
	});
};

const getMovies = (req,res) => {

	logger.info("Get movies Fired");
	
	let movies = sampleData.entries.filter(function (el) {
		return el.programType === 'movie'
	});
	
	res.json({
		count:movies.length,
		result: movies,
		status: "OK"
	});
	

};

module.exports = {
	getMovies,
	getSeries
};
