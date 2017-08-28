'use strict'

const model = require('../mongo/model')

module.exports = (projectId, parentId) => {
  var q = { projectId };
  if (parentId) q.parentId = parentId;
	return model
		.find(q)
		.lean()
		.exec()
}
