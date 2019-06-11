'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductShopModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('product-shop', {
    count: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }
  )
}
