'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('product', {
    name: {
      type: Sequelize.STRING, 
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false

    },
    available_quantity: {
      type: Sequelize.INTEGER,
      allowNull: false

    },
    picture_url: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  }
  )
}
