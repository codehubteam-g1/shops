'use strict'

const store = {
  id: 1,
  name: 'McDonalds',
  address: 'Address Test',
  minimum_order_price: 100,
  opening_hour: '13:59:59',
  closing_hour: '23:59:59',
  logo_url: 'Test URL',
  cover_picture_url: 'Test URL',
  is_active: true,
  creation_timestamp: '13:00:00'
}
const stores = [
  store,
  extend(store, { id: 2, name: 'Burguer King', is_active: false }),
  extend(store, { id: 3, name: 'Taco Bell', is_active: true }),
  extend(store, { id: 4, name: 'KFC', is_active: false })
]
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}
module.exports = {
  single: store,
  all: stores,
  active: stores.filter(a => a.is_active),
  byId: id => stores.filter(a => a.id === id).shift()
}
