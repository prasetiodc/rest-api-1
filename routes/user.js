const router = require('express').Router()
// const {authentication, authorization} = require('../middleware/auth')
const userController = require('../controllers/user')

router.get('/', userController.findAll)
router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/:id', userController.findOne)
router.delete('/:id', userController.delete)
router.put('/:id', userController.update)

module.exports = router 
