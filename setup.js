'use strict'

const debug = require('debug')('shops:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'shops',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')

  //console.log('esto es una prueba')  


  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
