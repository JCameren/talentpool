const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/account', ensureLoggedIn, postsCtrl.getPostsApplied)

router.get('/:id', postsCtrl.show)

router.get('/', postsCtrl.index)

router.post('/', postsCtrl.create)

module.exports = router