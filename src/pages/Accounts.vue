<template>
   <div class="fullscreen">
      <Navbar />
      <div class="body">
         <aside class="sidebar">
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
                  <router-link :to="{ name: 'newAccount' }">
                     <font-awesome-icon
                        icon="plus-circle"
                        :style="{ color: 'white' }"
                     />
                     <span>Aggiungi conto</span>
                  </router-link>
               </div>
            </div>
         </aside>
         <div class="transaction-list">
            <div class="add-transaction">
               <router-link
                  :to="{
                     name: 'newTransaction',
                     params: { id: this.accountToShow }
                  }"
               >
                  <font-awesome-icon
                     icon="plus-circle"
                     :style="{ color: '#A7AEB7' }"
                  />
                  <span>Nuova transazione</span>
               </router-link>
            </div>
            <Transaction
               class="transaction"
               v-for="transaction in transactionList"
               :key="transaction.id"
               :amount="transaction.amount"
               :date="transaction.date"
               :note="transaction.description"
            />
            <router-view class="overlay" />
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
         accountToShow: null,
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
         this.accountToShow = accountID
      }
   },
   created() {
      if (this.accounts.length == 0) {
         this.getAccounts().then(() => {
            this.accountToShow = this.accounts[0].id
            this.currentAccount(this.accountToShow)
         })
      }
      this.accountToShow = this.accounts[0].id
      this.currentAccount(this.accountToShow)
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.modal
   background: black
.body
   display: flex
   .sidebar
      background: map-get($colors, 'sidebar')
      height: 100%
      width: $sidebar-width
      .sidebar-elements
         display: flex
         flex-direction: column
         height: 100%
         justify-content: space-between
         .sidebar-element
            align-items: center
            color: white
            cursor: pointer
            display: flex
            flex-direction: column
            font-size: 21px
            font-weight: 500
            height: 3em
            justify-content: center
            width: 100%
         .add-account
            align-items: center
            color: white
            cursor: pointer
            display: flex
            flex-direction: row
            justify-content: center
            padding: 16px
            span
               margin: 0px 0px 0px 10px
   .transaction-list
      position: relative
      width: calc(100vw - #{$sidebar-width})
   .add-transaction
      align-items: center
      color: map-get($colors, 'new-line')
      cursor: pointer
      display: flex
      flex-direction: row
      font-size: 22px
      font-weight: 600
      justify-content: flex-start
      margin: 10px 10px 0px 10px
      span
         margin: 0px 0px 0px 10px
</style>
