//Import Models
const models = require('../models')
const Order = models.order

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Order.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  Order.findOne({
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  Order.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  Order.update(
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
  Order.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}

