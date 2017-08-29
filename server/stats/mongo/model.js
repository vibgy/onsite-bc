'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	method: {
		type: String,
		required: true,
	},
	url: {
		required: true,
		type: String,
	},
	time: {
		required: true,
		type: Number,
		default: 0
	}
})

schema.pre('validate', function (next) {
  next();
})

module.exports = mongoose.model('Logs', schema)
