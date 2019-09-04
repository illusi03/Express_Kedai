//Import Models
const models = require('../models')
const Category = models.category
const Menu = models.menu

//FUNCTION UTAMA CRUD
exports.show = (req, res) => {
  Category.findOne({
    include: [
      {
        model: Menu,
      }
    ],
    where: { id: req.params.idCategory }
  }).then(data => res.send(data))
}