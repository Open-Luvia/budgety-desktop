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
      <transition name="pop" mode="out-in">
         <div v-if="show_new_category_form" class="category-form">
            <NewCategoryForm @close="showNewCategoryForm" />
         </div>
      </transition>
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
   padding: 10px 10px 10px 10px
   position: relative
   width: 100%
   .categories
      display: grid
      grid-template-columns: 0.5fr 0.5fr
      justify-content: stretch
      margin: 0px 5px 0px 5px
      width: calc(100% - 10px)
      .category-type
         display: flex
         flex-direction: column
         .card
            border-radius: 10px
            border: 0px solid grey
            margin: 10px 5px 10px 5px
            .category-header
               align-items: center
               border-radius: 10px
               display: flex
               font-size: 24px
               font-weight: 600
               height: 2.5em
               justify-content: center
            .expense-header
               background-color: map-get($colors, "negative-transaction")
               color: white
            .income-header
               background-color: map-get($colors, "positive-transaction")
               color: white
   .header
      align-items: center
      background-color: map-get($colors, 'sidebar')
      border-radius: 10px
      box-sizing: border-box
      color: white
      display: flex
      flex-direction: row
      height: 2.5em
      justify-content: space-between
      margin: 10px 10px 0px 10px
      padding: 20px
      width: calc(100% - 20px)
      span
         font-size: 22px
         font-weight: 700
      .add-category
         align-items: center
         cursor: pointer
         display: flex
         flex-direction: row
         justify-content: center
         padding: 0px 5px 0px 5px
         .button-text
            margin: 0px 0px 0px 10px
   .category-form
      width: calc(100%)
      margin: 10px 0px 0px 0px
</style>
