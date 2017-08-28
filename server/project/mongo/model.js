'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	dateUpdated: {
		type: Date,
		default: Date.now,
	},
	name: {
		required: true,
		type: String,
	}
})

schema.pre('validate', function (next) {
  //this.dateUpdated = Date.now;
  //this.dateCreated = this.dateUpdated;
  //next();
})

module.exports = mongoose.model('Project', schema)
