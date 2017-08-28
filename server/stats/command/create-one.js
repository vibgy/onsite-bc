'use strict'

const model = require('../mongo/model')
const logger = require('../../lib/logger')

module.exports = data => {
	logger.debug(data);
	return model
		.create(data)
		.call('toObject')
}
