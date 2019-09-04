//Import Models
const models = require('../models')
const Order = models.order
const Transaction = models.transaction
const Menu = models.menu

exports.show = (req, res) => {
  Order.findOne({
    include: [
      {
        model: Menu,
      },
      {
        model: Transaction
      }
    ],
    where: { transactionId: req.params.transactionId, menuId:req.params.menuId }
  }).then(data => res.send(data))
}