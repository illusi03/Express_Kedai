'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('menus', [
      {
        categoryId: 3,
        name: "Nasi Goreng Biasa",
        image: "https://caramembuatmakanan123.files.wordpress.com/2015/03/nasi-goreng-kambing-jogja-istimewa.jpg",
        price: 2000
      },
      {
        categoryId: 3,
        name: "Nasi Goreng Pedas",
        image: "https://pergiyuk.com/blog/wp-content/uploads/2016/08/Nasi-Goreng-e1471790582459.jpg",
        price: 25000
      },
      {
        categoryId: 3,
        name: "Mie Goreng Sambalado",
        image: "https://cdn.idntimes.com/content-images/post/20171218/openrice-62a2451c4c897b7f53367007651525c2_600x400.jpg",
        price: 12500
      },
      {
        categoryId: 3,
        name: "Mie Goreng Biasa",
        image: "https://i2.wp.com/www.bisamasak.com/wp-content/uploads/2018/08/mie-goreng.jpg?fit=867%2C601&ssl=1",
        price: 10000
      },
      {
        categoryId: 3,
        name: "Mie Goreng Super",
        image: "https://i2.wp.com/www.bisamasak.com/wp-content/uploads/2018/08/mie-goreng.jpg?fit=867%2C601&ssl=1",
        price: 25000
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('menus', null, {});
  }
};
