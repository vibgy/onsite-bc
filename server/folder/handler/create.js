'use strict'

const createOne = require('../command/create-one')
const findById = require('../query/find-by-id')
const logger = require('../../lib/logger')

module.exports = (req, res, next) => {
	logger.debug(req.body)
	logger.debug(req.query)
	// lets save metadata
	var md = {
		projectId: req.query.projectId,
		parentId: req.query.parentId,
		name: req.body.name,
		url: 'NA',
		type: 'FOLDER'
	}
	createOne(md)
		.then(createdFile => findById(createdFile._id))
		.then(asset => res.json(asset))
		.catch(next)
}
