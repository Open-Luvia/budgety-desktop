<template>
   <div class="settings-categories">
      <div class="categories">
         <div
            class="category"
            v-for="category in expense_category_tree"
            :key="category.id"
         >
            {{ category.name }}
            <div class="children" v-if="category.children.length != 0">
               <div
                  class="child-category"
                  v-for="child in category.children"
                  :key="child.id"
               >
                  {{ child.name }}
               </div>
            </div>
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
import { mapActions, mapGetters } from 'vuex'

export default {
   methods: {
      ...mapActions('categories', ['getCategories'])
   },
   computed: {
      ...mapGetters('categories', ['expense_category_tree'])
   },
   created() {
      this.getCategories()
   }
}
</script>

<style lang="sass" scoped>
.settings-categories
   align-items: flex-start
   display: flex
   flex-direction: column
   font-size: 22px
   height: 100%
   position: relative
   width: 100%
   .categories
      margin: 32px
      .category
         align-items: flex-start
         display: flex
         flex-direction: column
         margin:
         padding: 0px 16px 24px 16px
         .children
            align-items: flex-start
            display: flex
            flex-direction: column
            margin: 16px 0px 0px 32px
            .child-category
               margin: 0px 0px 16px 0px
   .add-category
      align-items: center
      cursor: pointer
      display: flex
      flex-direction: row
      padding: 16px
      span
         margin: 0px 0px 0px 10px
</style>
