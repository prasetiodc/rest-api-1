const {User} = require('../models/')
const {Todo} = require('../models/')              //model untuk authorization
const { verify } = require('../helpers/jwt')

function authentication(req, res, next) {
  let decoded = verify(req.headers.token);

  User.findOne({ where: { email: decoded.email } })
    .then(userFound => {
      if (userFound) {
        req.userId = userFound.id
        next()
      } else {
        res.status(401).json({ message: 'Unauthorized' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Internal Server Error' })
    })

}

function authorization(req, res, next) {
  Todo.findOne({ where: { id: req.params.id }})
    .then(data => {
      if (String(data.userId) === String(req.userId)) {
        next()
      } else {
        res.status(401).json({ message: 'Unauthorized' })
      }
    })
    .catch(err => {
      res.status(401).json({ message: 'Unauthorized' })
    })
}

module.exports = { authentication, authorization }
