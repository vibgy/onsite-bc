'use strict'

const logger = require('../../lib/logger')
const config = require('../../../config')
const s3SignedUrl = require('../../lib/get-signed-s3-download-url')
const findById = require('../query/find-by-id')

module.exports = (req, res, next) => {
  findById(req.params.id)
    .then(asset => res.redirect(s3SignedUrl(asset.url)))
    .catch(next)
}
