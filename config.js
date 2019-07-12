//const debug = require('debug')('ordenes:db:setup')

module.exports = {
  db: {
    database: process.env.DB_NAME || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || '',
    dialect: 'postgres',
    //logging: s => debug(s),
    setup: true
  }
}