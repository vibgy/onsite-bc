'use strict'

const model = require('../mongo/model')

module.exports = (id, sz) => {
	return model
		.findOneAndUpdate({_id: id, type: 'FOLDER'}, {$inc: {size: sz}})
		.exec()
}
