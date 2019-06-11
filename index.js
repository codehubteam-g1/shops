'use strict'

const setupDatabase = require('./lib/db')
const setupStoreModel = require('./models/store')
const setupProductModel = require('./models/product')
const setupStore = require('./lib/store')
const setupProduct = require('./lib/product')
const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 1000
    },
    query: {
      raw: true
    }
  }
  )

  const sequelize = setupDatabase(config)
  const StoreModel = setupStoreModel(config)
  const ProductModel = setupProductModel(config)

  StoreModel.hasMany(ProductModel)
  ProductModel.BelongsTo(StoreModel)
  
  await sequelize.authenticate()
  if (config.setup) {
    await sequelize.sync({ force: true }) // Se reemplaza la base de datos / perdida de informacion
  }

  const Store = setupStore(StoreModel)
  const Product = setupProduct(ProductModel, StoreModel)
  return {
    Store,
    Product
  }
}
