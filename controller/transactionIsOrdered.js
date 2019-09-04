//Import Models
const models = require('../models')
const Transaction = models.transaction
const Order = models.order
const Menu = models.menu

//FUNCTION UTAMA CRUD

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
    where: { id: req.params.id, status: null }
  }).then(data => res.send(data))
}