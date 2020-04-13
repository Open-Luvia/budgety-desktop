import CategoriesApi from '@/api/modules/categories.api.js'

export default {
   namespaced: true,
   state: {
      categories: []
   },
   mutations: {
      SET_CATEGORIES(state, categories) {
         state.categories = categories
      }
   },
   actions: {
      getCategories({ commit }) {
         return CategoriesApi.getCategories()
            .then(response => {
               commit('SET_CATEGORIES', response.data)
            })
            .catch(error => {
               console.log(
                  'There was a problem fetching your categories: ' +
                     error.message
               )
            })
      }
   }
}
