const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'

// POST /api/users (create a user - signup)
router.post('/', usersCtrl.create);

// POST /api/users/login (sign-in)
router.post('/login', usersCtrl.login)

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken, ensureLoggedIn)

module.exports = router