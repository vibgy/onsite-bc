'use strict'

const find = require('../query/find')

module.exports = (req, res, next) => {
	find()
		.then(logs => res.json(logs))
		.catch(next)
}
