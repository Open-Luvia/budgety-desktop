<template>
   <div>
      <Navbar />
      <div class="body">
         <div class="sidebar">
            <div class="sidebar-elements">
               <div>
                  <div
                     class="sidebar-element"
                     v-for="account in accounts"
                     :key="account.id"
                     @click="currentAccount(account.id)"
                  >
                     {{ account.name }}
                  </div>
               </div>
               <div class="add-account">
                  <font-awesome-icon
                     icon="plus-circle"
                     :style="{ color: 'white' }"
                  />
                  <span>Aggiungi conto</span>
               </div>
            </div>
         </div>
         <div class="transaction-list">
            <Transaction
               class="transaction"
               v-for="transaction in transactionList"
               :key="transaction.id"
               :amount="transaction.amount"
               :date="transaction.date"
               :note="transaction.description"
            />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Transaction from '../components/Transaction.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
   components: {
      Navbar,
      Transaction
   },
   data() {
      return {
         transactionList: null,
         transaction: {
            amount: null,
            date: null,
            description: null
         }
      }
   },
   computed: {
      ...mapState('accounts', ['accounts']),
      ...mapState('transactions', ['transactions'])
   },
   methods: {
      ...mapActions('accounts', ['getAccounts']),
      ...mapActions('transactions', ['getTransactionsByAccount']),
      currentAccount(accountID) {
         this.getTransactionsByAccount(accountID).then(() => {
            this.transactionList = this.transactions.get(accountID)
         })
      }
   },
   created() {
      if (this.accounts.length == 0) {
         this.getAccounts()
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.body
    display: flex
    height: calc(100vh - #{$navbar-height})
    .add-account
        align-items: center
        color: white
        cursor: pointer
        display: flex
        flex-direction: row
        justify-content: center
        padding: 16px
        span
            padding: 0px 0px 0px 8px
    .transaction-list
        width: calc(100vw - #{$sidebar-width})
</style>
