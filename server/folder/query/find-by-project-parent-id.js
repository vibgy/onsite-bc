'use strict'

const model = require('../mongo/model')

module.exports = (projectId, parentId) => {
  var q = { projectId };
  if (parentId) q.parentId = parentId;
  if (!parentId) q.parentId = projectId;
	return model
		.find(q)
		.lean()
		.exec()
}
