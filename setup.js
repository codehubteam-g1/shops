'use strict'
const debug = require('debug')('shopsdb:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

const promp = inquirer.createPromptModule()

async function setup () {
  const answer = await promp([
    {
      type: 'confirm',
      name: 'setup',
      message: 'This will destroy your database, are you sure?'
    }
  ]
  )
  if (!answer.setup) {
    return console.log('Ok, nothing happened (:')
  }
  const config = {
    database: process.env.DB_NAME || 'shops',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'hnsahnsa',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s),

    setup: true
  }
  await db(config).catch(handleFatalError)
  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[faltal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
