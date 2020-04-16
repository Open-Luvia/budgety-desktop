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
               console.log(response.data)
               //commit('SET_CATEGORIES', response.data.categories)
               var categoryTree = response.data.categories.filter(
                  category => category.parent_id == null
               )
               categoryTree.forEach(item => (item['children'] = []))
               response.data.categories.forEach(item => {
                  if (item.parent_id != null) {
                     const parentCategory = categoryTree.find(
                        parent => parent.id == item.parent_id
                     )
                     parentCategory.children.push(item)
                  }
               })
               commit('SET_CATEGORIES', categoryTree)
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
