import CategoriesApi from '@/api/modules/categories.api.js'

function fillParentCategoryWithChildren(category_tree, categories) {
   //per ogni categoria padre crea un campo children vuoto
   category_tree.forEach(item => (item['children'] = []))
   categories.forEach(item => {
      if (item.parent_id != null) {
         const parent_category = category_tree.find(
            //cerca la categoria padre che ha come id il parent_id della figlia
            parent => parent.id == item.parent_id
         )
         //se non trova alcun elemento padre non aggiunge nulla ai figli
         if (parent_category) {
            parent_category.children.push(item)
         }
      }
   })
   return category_tree
}

export default {
   namespaced: true,
   state: {
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
      async getCategories({ commit, rootState }) {
         const payload = {
            user_id: rootState.user_id
         }
         await CategoriesApi.getCategories(payload)
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
   },
   getters: {
      expense_categories(state) {
         return state.categories.filter(category => category.is_expense == 1)
      },
      income_categories(state) {
         return state.categories.filter(category => category.is_expense == 0)
      },
      expense_category_tree(state) {
         //riempie il category tree con categorie parent
         var category_tree = state.categories.filter(
            //Le categorie parent hanno il parent_id nullo e sono di spesa
            category => category.parent_id == null && category.is_expense == 1
         )
         return fillParentCategoryWithChildren(category_tree, state.categories)
      },
      income_category_tree(state) {
         //riempie il category tree con categorie parent
         var category_tree = state.categories.filter(
            //Le categorie parent hanno il parent_id nullo e sono di spesa
            category => category.parent_id == null && category.is_expense == 0
         )
         return fillParentCategoryWithChildren(category_tree, state.categories)
      },
      categories_is_empty(state) {
         return state.categories == 0
      }
   }
}
