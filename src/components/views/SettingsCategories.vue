<template>
   <div class="settings-categories">
      <div class="category" v-for="category in categories" :key="category.id">
         {{ category.name }}
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
   width: 100%
   height: 100%
   position: relative
   .add-category
      display: flex
      align-items: center
      cursor: pointer
      flex-direction: row
      padding: 16px
      span
         margin: 0px 0px 0px 10px
</style>
