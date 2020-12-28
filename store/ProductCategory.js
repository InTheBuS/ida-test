import {IDATestApi} from "@/RequestApi/request";

export const state = () => ({
  storeCategories: []
})

export const mutations = {
  setCategoryList(state, categories) {
    state.storeCategories = [...categories]
  }
}

export const actions = {
  async productCategoryList({commit}) {
    await IDATestApi.productCategoryList().then(response => {
        commit("setCategoryList", response)
      }
    )
  }

}

export const getters = {
  categories: state => state.storeCategories
}
