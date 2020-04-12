<template>
   <div id="app">
      <router-view :key="$route.fullPath" />
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'app',
   methods: {
      ...mapActions(['checkToken'])
   },
   created(){
      this.checkToken()
   }
}
</script>

<style lang="sass">
@import '/assets/global.sass'
</style>
