import swell from './client'

export const addToCart = async item => {
  return await swell.cart.addItem(item)
}

export const removeFromCart = async itemId => {
  return await swell.cart.removeItem(itemId)
}

export const updateProductQuantity = async (itemId, quantity) => {
  return await swell.cart.updateItem(itemId, { quantity })
}

export const emptyTheCart = async () => {
  return await swell.cart.setItems([])
}

export const getCart = async () => {
  return await swell.cart.get()
}
