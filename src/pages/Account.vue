<template>
   <div class="fullscreen">
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
                           {{ format(account.amount) }}
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
                  <span>New transaction</span>
               </router-link>
            </div>
            <div>
               <TransactionList
                  v-if="
                     !this.transactions_tree_is_empty && this.showTransactions
                  "
                  :account_id="parseInt(account_id)"
               />
            </div>
            <router-view class="overlay" />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TransactionList from '../components/TransactionList.vue'
import { mapGetters, mapState } from 'vuex'
import { amountFormatter } from '@/mixins/amountFormatter.mixin.js'

export default {
   mixins: [amountFormatter],
   components: {
      Navbar,
      TransactionList
   },
   props: {
      account_id: null //passato dal router
   },
   data() {
      return {
         showTransactions: true
      }
   },
   computed: {
      ...mapState('accounts', ['accounts']),
      ...mapGetters('transactions', ['transactions_tree_is_empty'])
   },
   created() {
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
      background: map-get($colors, 'sidebar')
      height: 100%
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
                  font-weight: 700
                  padding: 3px
                  width: 100px
               .positive
                  background-color: map-get($colors, 'positive-transaction')
               .negative
                  background-color: map-get($colors, 'negative-transaction')
         .active
            background-color: white !important
            color: black !important
            font-weight: 700 !important
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
      margin: 30px 30px 0px 30px
      span
         margin: 0px 0px 0px 10px
</style>
