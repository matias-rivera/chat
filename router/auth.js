const { login, register } = require('../controllers/authController')
const router = require('express').Router()
const { validate } = require('../validators')
const { rules: loginRules } = require('../validators/auth/login')
const { rules: registerRules } = require('../validators/auth/register')


router.post('/login',[loginRules, validate], login)

router.post('/register', [registerRules, validate], register)

module.exports = router