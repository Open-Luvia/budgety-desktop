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
      ...mapActions(['getTokenFromLocalStorage','checkTokenValidity','getUserInfo']),
      ...mapActions('accounts',['getAccounts'])
   },
   created(){
      if(localStorage.getItem('accessToken') != null){
         if(this.checkTokenValidity()){
            this.getTokenFromLocalStorage()
            this.getUserInfo().then(() => {
               this.getAccounts()
            })
         }
      }
   }
}
</script>

<style lang="sass">
@import '/assets/global.sass'
</style>
