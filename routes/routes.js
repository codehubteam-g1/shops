'use strict'

const Express = require('express');
const ErrorHandler = require('../db/lib/errorHandler')

module.exports = database => {
  const router = Express.Router();

  router.post('/createStore', async (req, res, next) => {
    try {
      if (req.headers.usertype != 'administrator') {
        throw ({ error: new Error('Debes estar logeado como administrador para poder crear una tienda'), status: 401 })
      }

      const db = await database;
      let store = await db.Store.create(req.body)

      res.json({
        success: true
      });
    } catch (error) {
      ErrorHandler(error, next)
    }
  })

  router.get('/getAllStores', async (req, res, next) => {
    try {
      const db = await database;
      let stores = await db.Store.findAll()
      res.json({
        stores
      });
    } catch (error) {
      ErrorHandler(error, next)
    }
  })

  router.get('/getStoreByStoreId/:id', async (req, res, next) => {
    try {
      let storeId = req.params.id
      const db = await database;
      let store = await db.Store.findByPk(storeId)
      res.json({
        store
      });
    } catch (error) {
      ErrorHandler(error, next)
    }
  })

  router.get('/getProductByProductId/:id', async (req, res, next) => {
    try {
      let productId = req.params.id
      const db = await database
      let product = await db.Product.findByPk(productId)
      res.json({
        product
      });
    } catch (error) {
      ErrorHandler(error, next)
    }
  })


  // router.get('/getUnassignedOrders', async (req, res, next) => {
  //   try {
  //     const db = await database;
  //     let orders = await db.Order.findAll({ where: { deliveryPersonId: null } })
  //     res.json({
  //       orders
  //     })
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  // router.get('/getOrderByOrderId/:id', async (req, res, next) => {
  //   try {
  //     let orderId = req.params.id
  //     const db = await database;
  //     let order = await db.Order.findByPk(orderId)
  //     res.json({
  //       order
  //     })
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  // router.get('/getOrdersByUserId/:id', async (req, res, next) => {
  //   try {
  //     let userId = req.params.id
  //     const db = await database;
  //     let orders = await db.Order.findAll({ where: { userId } })
  //     res.json({
  //       orders
  //     })
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  // router.get('/getOrdersByStoreId/:id', async (req, res, next) => {
  //   try {
  //     let storeId = req.params.id
  //     const db = await database;
  //     let orders = await db.Order.findAll({ where: { storeId } })
  //     res.json({
  //       orders
  //     })
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  // router.get('/getOrdersByDeliveryPersonId/:id', async (req, res, next) => {
  //   try {
  //     let deliveryPersonId = req.params.id
  //     const db = await database;
  //     let orders = await db.Order.findAll({ where: { deliveryPersonId } })
  //     res.json({
  //       orders
  //     })
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  // router.post('/createOrder', async (req, res, next) => {
  //   try {
  //     if (req.headers.usertype != 'client') {
  //       throw ({ error: new Error('Debes estar logeado como cliente para poder crear una orden'), status: 401 })
  //     }
  //     if(!req.body.products){
  //       throw ({ error: new Error('La orden no tiene productos'), status: 401 })
  //     }

  //     const db = await database;
  //     let body = req.body
  //     body.userId = req.headers.id
  //     let order = await db.Order.create(body)

  //     req.body.products.forEach(async product => {
  //       await order.createOrderProduct(product)
  //     });

  //     res.json({
  //       success: true
  //     });
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  // router.get('/getOrderProducts/:id', async (req, res, next) => {
  //   try {
  //     let id = req.params.id
  //     const db = await database;
  //     let order = await db.Order.findByPk(id)
  //     let products = await order.getOrderProducts()
  //     res.json({
  //       products
  //     })
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  // router.post('/changeOrderStatus/:id', async (req, res, next) => {
  //   try {
  //     if (req.headers.usertype != 'delivery person') {
  //       throw ({ error: new Error('Debes estar logeado como domiciliario para poder cambiar el estado de una orden'), status: 401 })
  //     }

  //     let orderId = req.params.id
  //     const db = await database;
  //     let order = await db.Order.findByPk(orderId)
  //     await order.update({status: req.body.status})
  //     res.json({
  //       success: true
  //     })
  //   } catch (error) {
  //     ErrorHandler(error, next)
  //   }
  // })

  return router;
}