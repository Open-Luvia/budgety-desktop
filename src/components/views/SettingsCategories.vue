<template>
   <div class="settings-categories">
      <div class="header">
         <span>Your Categories</span>
         <div
            v-if="!show_new_category_form"
            class="add-category"
            @click="showNewCategoryForm"
         >
            <font-awesome-icon icon="plus-circle" />
            <div class="button-text">New</div>
         </div>
      </div>
      <div v-if="show_new_category_form" class="new-category">
         <NewCategoryForm @close="showNewCategoryForm" />
      </div>
      <div class="categories">
         <div class="category-type">
            <div class="card">
               <div class="category-header expense-header">
                  <span>
                     Expense
                  </span>
               </div>
               <Category
                  v-for="category in expense_category_tree"
                  :category="category"
                  :key="category.id"
               />
            </div>
         </div>
         <div class="category-type">
            <div class="card">
               <div class="category-header income-header">
                  <span>
                     Income
                  </span>
               </div>
               <Category
                  v-for="category in income_category_tree"
                  :category="category"
                  :key="category.id"
               />
            </div>
         </div>
      </div>
      <router-view class="overlay" />
   </div>
</template>

<script>
import Category from '@/components/Category.vue'
import NewCategoryForm from '@/components/NewCategoryForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
   components: {
      NewCategoryForm,
      Category
   },
   data() {
      return {
         show_new_category_form: false
      }
   },
   computed: {
      ...mapGetters('categories', [
         'expense_category_tree',
         'income_category_tree',
         'categories_is_empty'
      ])
   },
   methods: {
      ...mapActions('categories', ['getCategories', 'newCategory']),
      showNewCategoryForm() {
         this.show_new_category_form = !this.show_new_category_form
      }
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
   padding: 10px 10px 10px 10px
   .categories
      width: calc(100% - 10px)
      display: grid
      grid-template-columns: 0.5fr 0.5fr
      justify-content: stretch
      margin: 0px 5px 0px 5px
      .category-type
         display: flex
         flex-direction: column
         .card
            border: 0px solid grey
            border-radius: 10px
            margin: 10px 5px 10px 5px
            .category-header
               display: flex
               align-items: center
               justify-content: center
               font-size: 24px
               font-weight: 600
               border-radius: 10px
               height: 2.5em
            .expense-header
               background-color: map-get($colors, "negative-transaction")
               color: white
            .income-header
               background-color: map-get($colors, "positive-transaction")
               color: white
   .header
      width: calc(100% - 20px)
      background-color: map-get($colors, 'sidebar')
      color: white
      border-radius: 10px
      margin: 10px 10px 0px 10px
      display: flex
      flex-direction: row
      align-items: center
      justify-content: space-between
      box-sizing: border-box
      padding: 20px
      height: 2.5em
      span
         font-size: 22px
         font-weight: 700
      .add-category
         justify-content: center
         align-items: center
         cursor: pointer
         display: flex
         flex-direction: row
         padding: 0px 5px 0px 5px
         .button-text
            margin: 0px 0px 0px 10px
</style>
