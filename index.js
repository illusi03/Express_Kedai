//Import Lib
const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

//Init Identifier
const app = express()
// const port = 5000
const port = process.env.PORT || 5000
app.use(bodyParser.json())

//Init Controllers
const CategoryController = require('./controller/category')
const CategoryMenusController = require('./controller/categoryMenus')
const MenuController = require('./controller/menu')
const OrderController = require('./controller/order')
const OrderTransactionController = require('./controller/orderTransaction')
const OrderStatusController = require('./controller/orderStatus')
const TransactionController = require('./controller/transaction')
const TransactionOrderController = require('./controller/transactionOrder')

//Init Route
app.group("/api/v1", (router) => {

    //API
    router.get('/categories',CategoryController.index);
    router.get('/category/:id',CategoryController.show);
    router.post('/category',CategoryController.store);
    router.patch('/category/:id',CategoryController.patch);
    router.delete('/category/:id',CategoryController.delete);
    //GetMenuByIDCat
    router.get('/category/menus/:idCategory',CategoryMenusController.show);

    //API
    router.get('/menus',MenuController.index);
    router.get('/menu/:id',MenuController.show);
    router.post('/menu',MenuController.store);
    router.patch('/menu/:id',MenuController.patch);
    router.delete('/menu/:id',MenuController.delete);

    //API
    router.get('/orders',OrderController.index);
    router.get('/order/:id',OrderController.show);
    router.post('/order',OrderController.store);
    router.patch('/order/:id',OrderController.patch);
    router.delete('/order/:id',OrderController.delete);
    //getJml Quantity
    router.get('/order/transactionId/:transactionId/menuId/:menuId',OrderTransactionController.show);
    //Rubah Order Status
    router.patch('/orderStatus/:transactionId',OrderStatusController.patch);
    //Check Sudah ada 
    router.get('/orderStatus/:transactionId',OrderStatusController.show);

    //API
    router.get('/transactions',TransactionController.index);
    router.get('/transaction/:id',TransactionController.show);
    router.post('/transaction',TransactionController.store);
    router.patch('/transaction/:id',TransactionController.patch);
    router.delete('/transaction/:id',TransactionController.delete);
    //AmbilGabungan
    router.get('/transactionOrder/:id',TransactionOrderController.show);
    
})

//Init Listener Port
app.listen(port, () => console.log(`Listening on port ${port}!`))