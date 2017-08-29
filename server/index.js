'use strict'

const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const P = require('bluebird')
const config = require('../config')
const responseTime = require('response-time')

// Have mongoose use bluebird as it's promise library per: http://mongoosejs.com/docs/promises.html
mongoose.Promise = P

const webpackConfig = require('../webpack.config')

const app = express()

// Parse JSON bodies
app.use(bodyParser.json())

// Set up the webpack dev server
app.use(webpackMiddleware(
	webpack(webpackConfig),
	{ publicPath: '/dist' }
))

// Set up static files
app.use(express.static('public'))

const PersistLogs = require('./stats');

app.use(responseTime( (req, res, time, next) => {
	console.log(req.method, req.url, time);
	PersistLogs.create(req, res, time, next);
}));

process.on('uncaughtException', function (e) {
	console.log(e);
})

// Routes for primary API
app.use('/api/projects', require('./project/router'))
app.use('/api/files', require('./file/file-router'))
app.use('/api/folders', require('./folder/router'))

mongoose
	.connect(config.db.url)
	.then(() => {
		app.listen(8080, () => {
			console.log('Server started') // eslint-disable-line no-console
		})
	})
	.catch(e => {
		console.error('Could not connect to mongo', e) // eslint-disable-line no-console
		process.exit()
	})
