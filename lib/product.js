
module.exports = function setupProduct (ProductModel) {
  
  async function findAllProducts () {
    return ProductModel.findAll()
  }

  async function findProductByPk (id) {
    return ProductModel.findByPk(id)
  }

  async function createProduct(product) {
    const result = await ProductModel.create(product)
    return result.toJSON()
  }
  //revisar despues
  async function updateProduct(product) { 
    
    const cond = {
      where: {
        id: products.id
      }
    }
    const updated = await ProductModel.update(product, cond)
    return updated 
    }
  return {
    findAllProducts,
    findProductByPk,
    createProduct,
    updateProduct
    //findByStoreId
  }
}
