'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    menuId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.menu)
    order.belongsTo(models.transaction)
  };
  return order;
};