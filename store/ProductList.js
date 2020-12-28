import {IDATestApi} from "@/RequestApi/request";

export const state = () => ({
  storeItemList: [],
  filteredItemList : []
})

export const mutations = {
  setStoreItemList(state, storeItems) {
    state.storeItemList = [...storeItems]
    state.filteredItemList = [...storeItems]
  },
  filterItemList(state, type) {
    let sorted = [...state.storeItemList.sort((a, b) => parseFloat(a[type]) - parseFloat(b[type]))]
    state.filteredItemList = [...sorted]
  }
}

export const actions = {
  async productCategoryList({commit}, id) {
    await IDATestApi.productItemsList(id).then(response => {
        commit("setStoreItemList", response)
      }
    )
  },
  productItemListByFilter({commit}, type) {
    commit("filterItemList", type)
  }
}

export const getters = {
  itemList: state => state.storeItemList,
  filteredItemList: state => state.filteredItemList
}
