'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = config => {
    const sequelize = setupDatabase(config)

    return sequelize.define('stores_tags', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
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
    })
}

