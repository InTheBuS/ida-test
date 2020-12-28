import * as axios from "axios"

export const IDATestApi = {
  productCategoryList: () => {
    return axios.get("https://frontend-test.idaproject.com/api/product-category")
      .then(response => {
        try {
          return response.status === 200 ? response.data : new Error(response.data.error)
        } catch (err) {
          throw new Error(err)
        }
      })

  },
  productItemsList: (id) => {
    return axios.get(`https://frontend-test.idaproject.com/api/product?category=${id}`)
      .then(response => {
        try {
          return response.status === 200 ? response.data : new Error (response.data.error)
        } catch (err) {
          throw new Error(err)
        }
      })
  }
}
