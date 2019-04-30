const { User } = require('../models/')
const { hash } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')
const { compare } = require('../helpers/bcrypt')

class userController {
  static findAll(req, res) {
    User.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static findOne(req, res) {
    User.findByPk(req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static signup(req, res) {
    User.create({
      email: req.body.email,
      password: hash(req.body.password),
      role: req.body.role
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static delete(req, res) {
    User.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.status(200).json("data terhapus")
      })
      .catch(err => {
        res.status(404).json({err})
      })
  }

  static update(req, res) {
    let newData = {
      email: req.body.email,
      password: hash(req.body.password),
      role: req.body.role
    }
    User.update(newData,
      {
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json({err})
      })
  }

  static signin(req, res) {

    User.findOne({where : { email: req.body.email }})
      .then(found => {
        if (compare(req.body.password, found.password)) {
          let jwt = sign({ id: found.id, email: found.email })
          res.status(201).json({ token: jwt })
        }
      })
  }
}

module.exports = userController
