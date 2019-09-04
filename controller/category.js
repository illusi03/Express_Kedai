//Import Models
const models = require('../models')
const Category = models.category

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Category.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  Category.findOne({
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  Category.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  Category.update(
    req.body, {
      where: { id: req.params.id }
    }
  ).then(data => {
    res.send({
      message: "success"
    })
  })
}
exports.delete = (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  });
}
