<template>
   <div class="settings-categories">
      <div class="title">
         Le tue categorie
      </div>
      <div class="categories">
         <div class="expense">
            <div class="subheader">
               Expense
            </div>
            <Category
               v-for="category in expense_category_tree"
               :category="category"
               :key="category.id"
            />
         </div>
         <div class="income">
            <div class="subheader">
               Income
            </div>
            <Category
               v-for="category in income_category_tree"
               :category="category"
               :key="category.id"
            />
         </div>
      </div>
      <div class="add-category">
         <router-link :to="{ name: 'newCategory' }">
            <font-awesome-icon icon="plus-circle" />
            <span>Nuova Categoria</span>
         </router-link>
      </div>
      <router-view class="overlay" />
   </div>
</template>

<script>
import Category from '@/components/Category.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
   components: {
      Category
   },
   methods: {
      ...mapActions('categories', ['getCategories'])
   },
   computed: {
      ...mapGetters('categories', [
         'expense_category_tree',
         'income_category_tree',
         'categories_is_empty'
      ])
   },
   created() {
      if (this.categories_is_empty) {
         this.getCategories()
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.settings-categories
   align-items: flex-start
   display: flex
   flex-direction: column
   font-size: 22px
   height: 100%
   position: relative
   width: 100%
   .title
      font-size: 26px
      align-self: center
      padding: 10px
      font-weight: 700
      width: inherit
   .categories
      width: inherit
      display: flex
      flex-flow: row wrap
      justify-content: stretch
      .income
         flex-grow: 1
         display: flex
         flex-direction: column
         .subheader
            font-size: 22px
      .expense
         flex-grow: 1
         display: flex
         flex-direction: column
         .subheader
            font-size: 22px
   .add-category
      width: inherit
      justify-content: center
      align-items: center
      cursor: pointer
      display: flex
      flex-direction: row
      padding: 16px
      span
         margin: 0px 0px 0px 10px
</style>
