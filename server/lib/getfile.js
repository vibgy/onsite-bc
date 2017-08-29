'use strict'

const s3 = require('./s3')

module.exports = key => {
	const params = {
		Bucket: 'coding-challenges',
		Key: key
	}
	return s3.getObject(params).createReadStream();
}
