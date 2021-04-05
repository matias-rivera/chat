const router = require('express').Router()
const { index, create, messages, remove } = require('../controllers/chatController')
const { auth } = require('../middleware/auth')
const { validate } = require('../validators')


router.get('/', [auth], index)
router.get('/messages', [auth], messages)
router.post('/create', [auth], create)
router.delete('/:id', [auth], remove)


module.exports = router