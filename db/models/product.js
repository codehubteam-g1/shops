'use strict'

const Sequelize = require('sequelize')

module.exports = sequelize => {
  let productModel = sequelize.define('products', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    availableQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    pictureUrl: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  })

  return productModel
}