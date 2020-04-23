<template>
   <div class="fullscreen">
      <Navbar />
      <div class="body">
         <div class="no-accounts">
            <h1>Sembra che qui non ci sia nulla</h1>
            <h4>
               Per registrare qualsiasi spesa o entrata hai prima bisogno di
               creare un conto
            </h4>
         </div>
         <router-link :to="{ name: 'firstAccount' }">
            <BaseButton button_class="secondary">
               Crea un conto
            </BaseButton>
         </router-link>
         <router-view class="overlay" />
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { mapState, mapActions } from 'vuex'

export default {
   components: {
      Navbar
   },
   data() {
      return {
         account_to_show: null,
         accounts_is_empty: false
      }
   },
   methods: {
      ...mapActions('accounts', ['getAccounts']),
      ...mapActions('categories', ['getCategories'])
   },
   computed: {
      ...mapState('accounts', ['accounts'])
   },
   created() {
      if (this.accounts.length == 0) {
         this.getAccounts().then(() => {
            if (this.accounts.length == 0) {
               this.accounts_is_empty = true
            } else {
               this.account_to_show = this.accounts[0].id
            }
         })
      } else {
         this.account_to_show = this.accounts[0].id
      }
      if (this.accounts_is_empty == false) {
         this.$router.push({
            name: 'account',
            params: { account_id: this.account_to_show }
         })
         this.getCategories()
      }
   }
}
</script>

<style lang="sass" scoped>
.body
   display: flex
   flex-direction: column
   align-items: center
   justify-content: center
   position: relative
   .no-accounts
      margin: 50px
</style>
