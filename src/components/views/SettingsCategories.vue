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
         <BaseInput
            placeholder="Nome"
            class="item"
            v-model="new_category.name"
         />
         <BaseToggleSwitch
            :default_option="0"
            class="item"
            @selected="changeType"
         />
         <div @click="showNewCategoryForm" class="item">
            <BaseIcon width="45" height="45" color="#FF5B57">
               <IconTimesCircle />
            </BaseIcon>
         </div>
         <div @click="submit" class="item">
            <BaseIcon width="45" height="45" color="#44D7B6">
               <IconCheckCircle />
            </BaseIcon>
         </div>
      </div>
      <div v-else class="add-category" @click="showNewCategoryForm">
         <font-awesome-icon icon="plus-circle" />
         <span>Nuova Categoria</span>
      </div>
      <router-view class="overlay" />
   </div>
</template>

<script>
import IconTimesCircle from '@/assets/icons/IconTimesCircle.vue'
import IconCheckCircle from '@/assets/icons/IconCheckCircle.vue'
import Category from '@/components/Category.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
   components: {
      Category,
      IconCheckCircle,
      IconTimesCircle
   },
   data() {
      return {
         show_new_category_form: false,
         new_category: {
            name: '',
            is_expense: 1
         }
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
      },
      submit() {
         this.newCategory(this.new_category).then(() => {
            this.new_category.name = ''
            this.new_category.is_expense = 1
         })
         this.showNewCategoryForm()
      },
      changeType(value) {
         if (value == 0) {
            this.new_category.is_expense = 1
         } else {
            this.new_category.is_expense = 0
         }
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
      display: grid
      grid-template-columns: 0.5fr 0.5fr
      justify-content: stretch
      .income
         display: flex
         flex-direction: column
         .subheader
            font-size: 22px
      .expense
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
      font-size: 18px
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
