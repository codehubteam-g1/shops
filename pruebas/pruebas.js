const db = require('../')

async function run (){

    const config = {
        database: process.env.DB_NAME || 'shops',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
      }
    
    const {Store} = await db(config).catch(handleFatalError)
   
    /*
    const product = await Product.createProduct({
      id: 3,
      name: "coca-cola",
      description: "fria",
      price: 400,
      available_quantity: 100,
      picture_url: "sub/coca",
      is_active: 1,
      creation_timestamp: "12:45:03",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      storeId: 1

    }).catch(handleFatalError)

    console.log(product)
    const product = await Product.findProductByPk(1)
    console.log(product)
    */

    const store = await Store.findAllStores().catch(handleFatalError)
    console.log(store)
   
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
