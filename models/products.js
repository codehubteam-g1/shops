'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = config => {
  const sequelize = setupDatabase(config)

  return sequelize.define('product', {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: Sequelize.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    availableQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    pictureUrl: {
      type: Sequelize.TEXT,
      validate: {
        isUrl: true
      }
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }
  )
}
