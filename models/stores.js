'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = config => {
  const sequelize = setupDatabase(config)

  return sequelize.define('stores', {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    minimumOrderPrice: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    openingHour: {
      type: Sequelize.TIME,
      allowNull: false
    },
    closingHour: {
      type: Sequelize.TIME,
      allowNull: false
    },
    logoUrl: {
      type: Sequelize.TEXT,
      validate: {
        isUrl: true
      }
    },
    coverPictureUrl: {
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
