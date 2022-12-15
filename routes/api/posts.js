const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

router.get('/:id', postsCtrl.show)

router.get('/', postsCtrl.index)

router.post('/', postsCtrl.create)

module.exports = router