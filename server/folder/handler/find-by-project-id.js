'use strict'

const findByProjectAndParentId = require('../query/find-by-project-parent-id')
const logger = require('../../lib/logger')

module.exports = (req, res, next) => {
  logger.debug("findByProjectAndParentId", req.query);
	findByProjectAndParentId(req.params.id, req.query.parentId)
		.then(project => res.json(project || []))
		.catch((e) => {
			console.log(e);
			next();
		})
}
