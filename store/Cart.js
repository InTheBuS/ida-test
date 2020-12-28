export const state = () => ({
  itemsInCart: [],
  totalItemsCountInCart: 0
})

export const mutations = {
  addItemsInCart(state, storeItems) {
    state.itemsInCart = [...state.itemsInCart, {...storeItems}]
    state.totalItemsCountInCart = state.itemsInCart.length
    localStorage.setItem("cart", JSON.stringify(state.itemsInCart))
  },
  deleteItemInCart(state, indexToDelete) {
    let filteredCart = state.itemsInCart.filter((item, index) => index !== indexToDelete)
    state.itemsInCart = [...filteredCart]
    state.totalItemsCountInCart = state.itemsInCart.length
    localStorage.setItem("cart", JSON.stringify(state.itemsInCart))
  },
  deleteAllItemsInCart(state) {
    state.itemsInCart = []
    state.totalItemsCountInCart = state.itemsInCart.length
    localStorage.setItem("cart", "")
  },
  checkForItemsBeforeInitialize(state) {
    if (localStorage.getItem("cart").length > 0) {
      let itemsFromLocalStorage = JSON.parse(localStorage.getItem("cart"))
      state.itemsInCart = [...itemsFromLocalStorage]
      state.totalItemsCountInCart = state.itemsInCart.length
    }
  }
}

export const actions = {
  addItemInCart({commit}, item) {
    let newItem =
      {
        ...item
      }
    commit("addItemsInCart", newItem)
  },
  deleteItemInCart({commit}, indexToDelete) {
    commit("deleteItemInCart", indexToDelete)
  },
  deleteAllItemsInCart({commit}) {
    commit("deleteAllItemsInCart")
  },
  checkForItemsBeforeInitialize({commit}) {
    commit("checkForItemsBeforeInitialize")
  }
}

export const getters = {
  itemsInCart: state => state.itemsInCart,
  totalItemsCountInCart: state => state.totalItemsCountInCart
}
