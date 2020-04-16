<template>
   <div class="settings-categories">
      <div class="categories">
         <div
            class="category"
            v-for="category in categories"
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
import { mapActions, mapState } from 'vuex'

export default {
   methods: {
      ...mapActions('categories', ['getCategories'])
   },
   computed: {
      ...mapState('categories', ['categories'])
   },
   created() {
      this.getCategories()
   }
}
</script>

<style lang="sass" scoped>
.settings-categories
   display: flex
   flex-direction: column
   align-items: flex-start
   height: 100%
   position: relative
   width: 100%
   font-size: 22px
   .categories
      margin: 32px
      .category
         margin:
         padding: 0px 16px 24px 16px
         display: flex
         flex-direction: column
         align-items: flex-start
         .children
            margin: 16px 0px 0px 32px
            display: flex
            flex-direction: column
            align-items: flex-start
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
