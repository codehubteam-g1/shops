'use strict'

module.exports = function setupStore (StoreModel) {
  async function createOrUpdate (store) {
    const condition = {
      where: {
        id: store.id
      }
    }
    const existingStore = await StoreModel.findOne(condition)
    if (existingStore) {
      const updated = await StoreModel.update(store, condition)
      return updated ? StoreModel.findOne(condition) : existingStore
    }
    const result = await StoreModel.create(store)
    return result.toJSON()
  }

  function findById (id) {
    return StoreModel.findById(id)
  }

  return {
    findById,
    createOrUpdate
  }
}
