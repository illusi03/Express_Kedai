'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  menu.associate = function(models) {
    menu.belongsTo(models.category)
    menu.hasMany(models.order)
  };
  return menu;
};