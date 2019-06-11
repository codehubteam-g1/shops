'use strict'

module.exports = function setupProduct (ProductModel, StoreModel) {
  async function findByStoreId (id) {
    return ProductModel.findAll({
      include: [{
        model: StoreModel,
        where: {
          id
        }
      }],
      raw: true
    })
  }
  async function create (id, product) {
    const store = await StoreModel.findOne({
      where: { id }
    })

    if (store) {
      Object.assign(product, { storeId: store.id })
      const result = await ProductModel.create(product)
      return result.toJSON()
    }
  }
  return {
    create,
    findByStoreId
  }
}
