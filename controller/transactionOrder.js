//Import Models
const models = require('../models')
const Transaction = models.transaction
const Order = models.order
const Menu = models.menu

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Transaction.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  Transaction.findOne({
    include: [
      {
        model: Order,
        include:[
          {model:Menu}
        ]
      }
    ],
    where: { id: req.params.id }
  }).then(data => res.send(data))
}