'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = config => {
  const sequelize = setupDatabase(config)

  return sequelize.define('products_categories', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
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
