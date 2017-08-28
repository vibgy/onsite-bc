'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')
const logger = require('../../lib/logger')

module.exports = (req, res, time, next) => {
	// debugger;
	var obj = {method: req.method, url: req.url, time: time};
	logger.debug(obj);
	createOne(obj)
		.then(next)
		.catch((e) => {
			logger.error(e);
			next();
		})
}
