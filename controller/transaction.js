//Import Models
const models = require('../models')
const Transaction = models.transaction

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Transaction.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  Transaction.findOne({
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  Transaction.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  Transaction.update(
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
  Transaction.destroy({
    where: {
      id: req.params.id
    }
  });
}
