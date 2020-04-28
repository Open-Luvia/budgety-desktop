<template>
   <div class="settings-categories">
      <div class="header">
         Le tue categorie
      </div>
      <Category
         v-for="category in expense_category_tree"
         :category="category"
         :key="category.id"
      />
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
   .header
      font-size: $header-font-size
      align-self: center
      padding: 10px
      font-weight: 700
   .categories
      margin: 32px
   .add-category
      align-items: center
      cursor: pointer
      display: flex
      flex-direction: row
      padding: 16px
      span
         margin: 0px 0px 0px 10px
</style>
