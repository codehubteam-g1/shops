'use strict'

const Sequelize = require('sequelize')

module.exports = sequelize => {

  let storeModel = sequelize.define('stores', {
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
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    minimumOrderPrice: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      validate: {
        min: 0
      }
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
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    coverPictureUrl: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  })

  return storeModel
}
