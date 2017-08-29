'use strict'

const find = require('../query/find')
const logger = require('../../lib/logger')

module.exports = (req, res, next) => {
  logger.debug("find", req.params);
	find({parentId: req.params.id})
		.then(project => res.json(project || []))
		.catch((e) => {
			console.log(e);
			next();
		})
}
