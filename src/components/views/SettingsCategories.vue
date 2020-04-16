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
      <router-view class="popup" />
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
   height: 100%
   position: relative
   width: 100%
   .add-category
      align-items: center
      cursor: pointer
      display: flex
      flex-direction: row
      padding: 16px
      span
         margin: 0px 0px 0px 10px
</style>
