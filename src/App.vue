<template>
   <div id="app">
      <router-view :key="$route.fullPath" />
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'app',
   methods: {
      ...mapActions([
         'getDataFromLocalStorage',
         'checkTokenValidity',
         'getUserInfo'
      ]),
      ...mapActions('accounts', ['getAccounts'])
   },
   computed: {
      ...mapGetters(['logged_in'])
   },
   created() {
      if (localStorage.getItem('access_token') != null) {
         if (this.checkTokenValidity()) {
            this.getDataFromLocalStorage()
            this.getUserInfo()
            if (this.logged_in) {
               this.getAccounts()
            }
         }
      }
   }
}
</script>

<style lang="sass">
@import '/assets/global.sass'
</style>
