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
      ...mapActions(['getTokenFromLocalStorage','checkTokenValidity'])
   },
   created(){
      if(localStorage.getItem('accessToken') != null){
         this.checkTokenValidity()
         this.getTokenFromLocalStorage()
      }
   }
}
</script>

<style lang="sass">
@import '/assets/global.sass'
</style>
