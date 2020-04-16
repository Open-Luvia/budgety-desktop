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
      getCategories({ commit, rootState }) {
         const payload = {
            user_id: rootState.userID
         }
         return CategoriesApi.getCategories(payload)
            .then(response => {
               commit('SET_CATEGORIES', response.data.categories)
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
