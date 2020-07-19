<template>
   <div>
      <Navbar />
      <div class="body">
         <aside class="sidebar">
            <div class="sidebar-elements">
               <div>
                  <div
                     :class="{
                        'sidebar-element': true,
                        active: account_id == account.id
                     }"
                     class="sidebar-element"
                     v-for="account in accounts"
                     :key="account.id"
                  >
                     <router-link
                        :to="{
                           name: 'account',
                           params: { account_id: account.id }
                        }"
                        class="container"
                     >
                        {{ account.name }}
                        <div
                           :class="{
                              amount: true,
                              positive: account.amount > 0,
                              negative: account.amount < 0
                           }"
                        >
                           {{
                              account.amount.toLocaleString('it-IT', {
                                 minimumFractionDigits: 2
                              })
                           }}
                        </div>
                     </router-link>
                  </div>
               </div>
               <div class="add-account">
                  <router-link :to="{ name: 'newAccount' }">
                     <font-awesome-icon
                        icon="plus-circle"
                        :style="{ color: 'white' }"
                     />
                     <span>Add account</span>
                  </router-link>
               </div>
            </div>
         </aside>
         <div class="transaction-list">
            <div class="header">
               <span>Transactions</span>
               <div class="add-transaction">
                  <router-link
                     :to="{
                        name: 'newTransaction',
                        params: { id: this.account_id }
                     }"
                  >
                     <font-awesome-icon
                        icon="plus-circle"
                        :style="{ color: '#A7AEB7' }"
                     />
                     <span>New</span>
                  </router-link>
               </div>
            </div>
            <div v-if="this.showTransactions">
               <Transaction
                  v-for="transaction in transaction_list"
                  :transaction="transaction"
                  :key="transaction.id"
               />
               <router-view class="overlay" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Transaction from '@/components/Transaction.vue'
import { mapGetters, mapState } from 'vuex'
import { amountFormatter } from '@/mixins/amountFormatter.mixin.js'

export default {
   mixins: [amountFormatter],
   components: {
      Navbar,
      Transaction
   },
   props: {
      account_id: null //passato dal router
   },
   data () {
      return {
         showTransactions: true
      }
   },
   computed: {
      ...mapState('accounts', ['accounts']),
      ...mapGetters('transactions', ['transactions_by_account']),
      transaction_list () {
         return this.transactions_by_account(this.account_id)
      }
   },
   created () {
      if (this.$router.currentRoute.name != 'account') {
         this.showTransactions = false
      }
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
      background: #f0f0f0
      border-right: 2px solid #e5e5e5
      height: calc(100vh - 64px)
      // position: fixed
      // top: 64px
      width: $sidebar-width

      .sidebar-elements
         display: flex
         flex-direction: column
         height: 100%
         justify-content: space-between

         .active
            font-weight: 700

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

         .sidebar-element
            color: #222
            cursor: pointer
            font-size: 21px
            font-weight: 500
            height: 3.2em
            width: 100%

            .container
               align-items: center
               display: flex
               flex-direction: row
               height: 100%
               justify-content: space-between
               padding: 0px 30px 0px 30px
               width: 100%

               .amount
                  // border-radius: 5px
                  // color: white
                  font-size: 18px
                  padding: 2px 12px
                  // min-width: 130px
                  text-align: right

                  &::after
                     content: '€'
                     font-size: 14px

               // .positive
               //    background-color: map-get($colors, 'positive-transaction')
               // .negative
               //    background-color: map-get($colors, 'negative-transaction')


   .transaction-list
      position: relative
      // margin-left: $sidebar-width
      width: calc(100vw - #{$sidebar-width})
      max-height: calc(100vh - 64px)
      overflow-y: scroll

      .header
         display: flex
         flex-direction: row
         align-items: center
         justify-content: space-between
         background-color: map-get($colors, "sidebar")
         margin: 20px 20px 10px 20px
         padding: 10px 20px 10px 20px
         border-radius: 10px
         span
            font-size: 22px
            font-weight: 700
            color: white

   .add-transaction
      align-items: center
      color: map-get($colors, 'new-line')
      cursor: pointer
      display: flex
      flex-direction: row
      font-size: 22px
      font-weight: 600
      justify-content: flex-start
      span
         margin: 0px 0px 0px 10px
</style>
