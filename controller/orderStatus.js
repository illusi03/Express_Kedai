//Import Models
const models = require('../models')
const Order = models.order

exports.patch = (req, res) => {
  Order.update(
    req.body, {
      where: { transactionId: req.params.transactionId, status: null }
    }).then(data => {
      res.send({
        message: "success"
      })
    })
}
exports.show = (req, res) => {
  Order.findAll({
    where: { transactionId: req.params.transactionId, status: null }
  }).then(data => res.send(data))
}