'use strict'

const findByProjectAndParentId = require('../query/find-by-project-parent-id')
const logger = require('../../lib/logger')

module.exports = (req, res, next) => {
  logger.debug("findByProjectAndParentId", req.query);
	findByProjectAndParentId(req.query.projectId, req.query.parentId)
		.then(assets => res.json(assets || []))
		.catch((e) => {
			console.log(e);
			next();
		})
}
