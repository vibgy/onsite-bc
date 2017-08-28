'use strict'

const router = require('express').Router()  // eslint-disable-line new-cap

router.post('/', require('./handler/create'))
router.get('/:id/items', require('./handler/find-by-project-id'))

module.exports = router
