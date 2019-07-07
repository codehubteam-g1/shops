'use strict'

module.exports = function setupStore (StoreModel) {

  async function findAllStores() {
    return StoreModel.findAll()
  }

  async function findStoreByPk(id) {
    return StoreModel.findByPk(id)
  }
  async function createStore(store) {
    const result = await StoreModel.create(store)
    return result.toJSON()
  }
  
  //probar luego
  async function updateStore(store) { 
    
    const cond = {
      where: {
        id: stores.id
      }
    }
    const updated = await StoreModel.update(store, cond)
    return updated 
  }

  return {
    findAllStores,
    findStoreByPk,
    createStore,
    updateStore
  }
}
