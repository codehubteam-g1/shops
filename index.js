'use strict'

const setupDatabase = require('./lib/db')
const setupStoreModel = require('./models/store')
const setupProductModel = require('./models/product')
const setupStore = require('./lib/store')
const setupProduct = require('./lib/product')

module.exports = async function (config) {

  const sequelize = setupDatabase(config)
  const StoreModel = setupStoreModel(config)
  const ProductModel = setupProductModel(config)

  StoreModel.hasMany(ProductModel)
  ProductModel.belongsTo(StoreModel)
  
  await sequelize.authenticate()
  if (config.setup) {
    await sequelize.sync({ force: false }) // Se reemplaza la base de datos / perdida de informacion
  }

  const Store = setupStore(StoreModel)
  const Product = setupProduct(ProductModel, StoreModel)
  return {
    Store,
    Product
  }
}
