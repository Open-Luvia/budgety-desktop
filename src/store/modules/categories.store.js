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
      getCategories({ dispatch, rootState }) {
         const payload = {
            user_id: rootState.userID
         }
         CategoriesApi.getCategories(payload)
            .then(response => {
               dispatch('makeCategoryTree', response.data)
            })
            .catch(error => {
               console.log(
                  'There was a problem fetching your categories: ' +
                     error.message
               )
            })
      },
      makeCategoryTree({ commit }, apiResponse){
         try {
            var categoryTree = apiResponse.categories.filter(  //riempie il category tree con categorie parent
               category => category.parent_id == null          //Le categorie parent hanno il parent_id nullo
            )
            categoryTree.forEach(item => (item['children'] = [])) //per ogni categoria padre crea un campo childer vuoto
            apiResponse.categories.forEach(item => {
               if (item.parent_id != null) {                      
                  const parentCategory = categoryTree.find(
                     parent => parent.id == item.parent_id  //cerca la categoria padre che ha come id il parent_id della figlia
                  )
                  parentCategory.children.push(item)
               }
            })
         } catch (error) {
            console.log("There was a problem building your category tree: ",error)
         }
         commit('SET_CATEGORIES', categoryTree)
      }
   }
}
