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
      ...mapActions(['getDataFromLocalStorage','checkTokenValidity','getUserInfo']),
      ...mapActions('accounts',['getAccounts'])
   },
   created(){
      if(localStorage.getItem('access_token') != null){
         if(this.checkTokenValidity()){
            this.getDataFromLocalStorage()
            this.getUserInfo()
         }
      }
   }
}
</script>

<style lang="sass">
@import '/assets/global.sass'
</style>
