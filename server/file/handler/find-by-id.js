'use strict'

const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
	findById(req.params.id)
		.then(assets => res.json(assets || []))
		.catch((e) => {
			console.log(e);
			next();
		})
}
