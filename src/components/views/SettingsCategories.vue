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
      <div v-if="show_new_category_form" class="new-category">
         <BaseInput placeholder="Nome" class="item" />
         <BaseToggleSwitch :default_option="0" class="item" />
         <font-awesome-icon
            icon="times-circle"
            @click="showNewCategoryForm"
            :style="{ color: '#FF5B57' }"
            size="xlg"
            class="item"
         />
         <font-awesome-icon
            icon="check-circle"
            @click="showNewCategoryForm"
            :style="{ color: '#44d7b6' }"
            size="xlg"
            class="item"
         />
      </div>
      <div v-else class="add-category" @click="showNewCategoryForm">
         <font-awesome-icon icon="plus-circle" />
         <span>Nuova Categoria</span>
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
      ...mapActions('categories', ['getCategories']),
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
   .new-category
      padding: 10px 10px 10px 20px
      width: inherit
      display: flex
      flex-direction: row
      align-items: center
      justify-content: space-between
      .item
         margin: 0px 20px 0px 0px
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
