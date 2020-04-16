<template>
   <div>
      <h1>Setting delle categorie</h1>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   methods: {
      ...mapActions('categories', ['getCategories'])
   },
   created() {
      this.getCategories()
   }
}
</script>

<style lang="sass" scoped></style>
