const router = require('express').Router()
const {authentication, authorization} = require('../middlewares/auth')
const todoController = require('../controllers/todo')

router.use(authentication)

router.get('/', todoController.findAll)
router.get('/:id', authorization, todoController.findOne)
router.post('/', todoController.create)
router.delete('/:id', authorization, todoController.delete)
router.put('/:id', authorization, todoController.update)
router.patch('/:id', authorization, todoController.patch)

module.exports = router 
