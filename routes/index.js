const router = require('express').Router()
const user = require('./user')
const todo = require('./todo')

router.use('/users', user) //done
router.use('/todos', todo) //done

module.exports = router