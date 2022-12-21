const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/account', ensureLoggedIn, postsCtrl.getPostsApplied)

router.get('/jobs', ensureLoggedIn, postsCtrl.getJobsListed)

router.put('/:id', ensureLoggedIn, postsCtrl.appliedToJobPost)

router.delete('/:id/unapply', ensureLoggedIn, postsCtrl.unapplyFromPost)

router.get('/:id', postsCtrl.show)

router.get('/', postsCtrl.index)

router.post('/', postsCtrl.create)

router.delete('/:id', ensureLoggedIn, postsCtrl.deleteJobListing)

module.exports = router