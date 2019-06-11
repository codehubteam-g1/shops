'use strict'

const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const storeFixtures = require('./fixtures/store')
let config = {
  logging: function () {}
}
let ProductStub = {
  BelongsTo: sinon.spy()
}
let single = Object.assign({}, storeFixtures.single)
let id = 1
let db = null
let StoreStub = null
let sandbox = null
let idArg = {
  where: {
    id
  }
}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()
  StoreStub = {
    hasMany: sandbox.spy()
  }

  // Model findOne Stub
  StoreStub.findOne = sandbox.stub()
  StoreStub.findOne.withArgs(idArg).returns(Promise.resolve(storeFixtures.byId(id)))
  // Model Find By Id Stub
  StoreStub.findById = sandbox.stub()
  StoreStub.findById.withArgs(id).returns(Promise.resolve(storeFixtures.byId(id)))
  // Model Update Stub
  StoreStub.update = sandbox.stub()
  StoreStub.update.withArgs(single, idArg).returns(Promise.resolve(single))
  const setupDatabase = proxyquire('../', {
    './models/product': () => ProductStub,
    './models/store': () => StoreStub
  })
  db = await setupDatabase(config)
})

test.serial('Store# Find By ID', async t => {
  let store = await db.Store.findById(id)
  t.deepEqual(store, storeFixtures.byId(id), 'should be the same')
})

test.afterEach(() => {
  sandbox && sandbox.restore()
})

test('Store', t => {
  t.truthy(db.Store, 'Store service should exist')
})

test.serial('Setup', t => {
  t.true(StoreStub.hasMany.called, 'StoreModel.hasMany was executed')
  t.true(ProductStub.BelongsTo.called, 'ProductModel.BelongsTo was executed')
})

test.serial('Store # Create Or Update -exist', async t => {
  let store = await db.Store.createOrUpdate(single)
  t.deepEqual(store, single, 'store should be same')
})
