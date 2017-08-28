'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')
const logger = require('../../lib/logger')

module.exports = (req, res, next) => {
	debugger;
	logger.debug(req.body);
	createOne(req.body)
		.then(createdProject => findById(createdProject._id))
		.then(project => res.json(project))
		.catch(next)
}
