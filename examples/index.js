'use strict'

const db = require('../')

async function run(){
const config ={
    database: process.env.DB_NAME || 'shops',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'hnsahnsa',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
}

const {Store,Product} = await db(config) .catch(handleFatalError)
}

function handleFatalError(err){
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}

run()