//Import Models
const models = require('../models')
const Menu = models.menu

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Menu.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  Menu.findOne({
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  Menu.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  Menu.update(
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
  Menu.destroy({
    where: {
      id: req.params.id
    }
  });
}
