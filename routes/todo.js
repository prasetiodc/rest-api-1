const router = require('express').Router()
const {authentication, authorization} = require('../middlewares/auth')
const todoController = require('../controllers/todo')

router.use(authentication)
router.get('/', todoController.findAll)
router.post('/', todoController.create)

router.use(authorization)
router.get('/:id', todoController.findOne)
router.delete('/:id', todoController.delete)
router.put('/:id', todoController.update)
router.patch('/:id', todoController.patch)

module.exports = router 
