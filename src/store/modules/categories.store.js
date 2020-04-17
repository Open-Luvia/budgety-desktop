import CategoriesApi from '@/api/modules/categories.api.js'

export default {
   namespaced: true,
   state: {
      category_tree: [],
      categories: [] //category without tree structure. To use in case of form selection
   },
   mutations: {
      SET_CATEGORY_TREE(state, category_tree) {
         state.category_tree = category_tree
      },
      SET_CATEGORIES(state, categories) {
         state.categories = categories
      }
   },
   actions: {
      async getCategories({ commit, dispatch, rootState }) {
         const payload = {
            user_id: rootState.user_id
         }
         await CategoriesApi.getCategories(payload)
            .then(response => {
               commit('SET_CATEGORIES', response.data.categories)
               dispatch('makeCategoryTree', response.data)
            })
            .catch(error => {
               console.log(
                  'There was a problem fetching your categories: ' +
                     error.message
               )
            })
      },
      makeCategoryTree({ commit }, apiResponse) {
         try {
            var category_tree = apiResponse.categories.filter(
               //riempie il category tree con categorie parent
               category => category.parent_id == null //Le categorie parent hanno il parent_id nullo
            )
            category_tree.forEach(item => (item['children'] = [])) //per ogni categoria padre crea un campo childer vuoto
            apiResponse.categories.forEach(item => {
               if (item.parent_id != null) {
                  const parentCategory = category_tree.find(
                     parent => parent.id == item.parent_id //cerca la categoria padre che ha come id il parent_id della figlia
                  )
                  parentCategory.children.push(item)
               }
            })
         } catch (error) {
            console.log(
               'There was a problem building your category tree: ',
               error
            )
         }
         commit('SET_CATEGORY_TREE', category_tree)
      }
   }
}
