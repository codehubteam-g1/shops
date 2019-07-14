'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupStoreModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('store', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    minimum_order_price: {
      type: Sequelize.FLOAT

    },
    opening_hour: {
      type: Sequelize.TIME

    },
    closing_hour: {
      type: Sequelize.TIME

    },
    logo_url: {
      type: Sequelize.TEXT

    },
    cover_picture_url: {
      type: Sequelize.TEXT
    }
  }
  )
}
