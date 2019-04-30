const { Todo } = require('../models')

class todoController {
  static findAll(req, res) {
    Todo.findAll({where:{userId:req.userId}})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static findOne(req, res) {
    Todo.findByPk(req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static create(req, res) {    
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.userId
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static delete(req, res) {
    Todo.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.status(200).json("data terhapus")
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static update(req, res) {
    let newData = {
      title: req.body.email,
      description: req.body.description
    }
    Todo.update(newData,
      {
        where: {
          id:req.params.id
        }
      }, {new: true})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }

  static patch(req, res) {

    Todo.findOne({where : {id : req.params.id}})
    .then((data)=>{
      data.title = req.body.title || data.title
      data.description = req.body.description || data.description
      return data.save()
    })
      .then(({dataValues}) => {
        res.status(200).json(dataValues)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  }
}

module.exports = todoController