'use strict'

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	projectId: mongoose.Schema.Types.ObjectId,
	parentId: mongoose.Schema.Types.ObjectId,
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	dateModified: {
		type: Date,
		default: Date.now,
	},
	name: {
		required: true,
		type: String,
	},
	size: {
		required: true,
		type: Number,
		default: 0
	},
	url: {
		required: true,
		type: String
	},
  type: {
    required: true,
    type: String,
    default: 'FILE'
  }
})

schema.pre('validate', function (next) {
	this.parentId = this.parentId || this.projectId;
  next();
})

module.exports = mongoose.model('Files', schema)
