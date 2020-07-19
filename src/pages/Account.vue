<template>
   <div>
      <Navbar />
      <div class="body">
         <aside class="sidebar">
            <div class="sidebar-elements">
               <div>
                  <div class="account-total">
                     Totale conti: 23123
                  </div>
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
                     <font-awesome-icon icon="plus" />
                     <span>Aggiungi conto</span>
                  </router-link>
               </div>
            </div>
         </aside>
         <div class="transactions-wrapper">
            <div class="title">
               <div class="text">Transazioni</div>
               <router-link
                  class="icon-button add-transaction"
                  :to="{
                     name: 'newTransaction',
                     params: { id: this.account_id }
                  }"
               >
                  <font-awesome-icon icon="plus" />
                  <div class="text">Aggiungi</div>
               </router-link>
            </div>
            <div class="transaction-list" v-if="this.showTransactions">
               <Transaction
                  v-for="transaction in transaction_list"
                  :transaction="transaction"
                  :key="transaction.id"
               />
            </div>
            <router-view class="overlay" />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Transaction from '@/components/Transaction.vue'
import { mapGetters, mapState } from 'vuex'

export default {
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
   background: #fafafa

   .sidebar
      background: map-get($colors, 'sidebar')
      height: calc(100vh - 64px)
      width: $sidebar-width

      .sidebar-elements
         display: flex
         flex-direction: column
         height: 100%
         justify-content: space-between

         .sidebar-element
            color: white
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
                  border-radius: 5px
                  color: white
                  font-size: 18px
                  padding: 6px 12px
                  // min-width: 130px
                  text-align: right

                  &::after
                     content: '€'
                     font-size: 14px

               .positive
                  background-color: map-get($colors, 'positive-transaction')
               .negative
                  background-color: map-get($colors, 'negative-transaction')

         .active
            font-weight: 700
            background-color: #fafafa
            color: #222

      .account-total
         background: #343B44
         color: white
         padding: 10px 32px
         font-size: 20px

.transactions-wrapper
   .title
      display: flex
      align-items: center
      justify-content: space-between
      margin: 0 32px
      margin-top: 32px
      margin-bottom: 12px
      font-weight: bold

      .text,.icon-button
         color: #333
         font-size: 18px

      .icon-button
         display: flex
         align-items: center
         .text
            margin-left: 10px


.transaction-list
   width: calc(100vw - 384px)
   margin: 0 32px
   background: white
   border-bottom: 2px solid #eee
   -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
   -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1)
   -webkit-border-radius: 16px
   -moz-border-radius: 16px
   border-radius: 16px
   height: min-content
   overflow: hidden

//    .title
//       display: flex
//       align-items: center
//       justify-content: space-between
//       border-bottom: 2px solid #eee
//       text-align: left
//       padding-left: 20px
//       padding-top: 15px
//       padding-bottom: 15px
//       margin: 0

//    .icon-button
//       display: flex
//       align-items: center

   // .transaction-list
   //    position: relative
   //    // margin-left: $sidebar-width
   //    width: calc(100vw - #{$sidebar-width})
   //    max-height: calc(100vh - 64px)
   //    overflow-y: scroll

   //    .header
   //       display: flex
   //       align-items: center
   //       justify-content: space-between

   //       // background-color: map-get($colors, "sidebar")
   //       // margin: 20px 20px 10px 20px
   //       // padding: 10px 20px 10px 20px
   //       // border-radius: 10px
   //       padding: 10px 32px

   //       .text
   //          font-size: 20px
   //          // color: white

   // .add-transaction
   //    align-items: center
   //    // color: white
   //    cursor: pointer
   //    display: flex
   //    font-size: 20px

   //    .text
   //       margin-left: 10px
   //       // color: white
</style>
