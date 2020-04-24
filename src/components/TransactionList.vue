<template>
   <div>
      <Transaction
         v-for="transaction in transaction_list"
         :transaction="transaction"
         :key="transaction.id"
      />
   </div>
</template>

<script>
import Transaction from '@/components/Transaction.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
   components: {
      Transaction
   },
   props: {
      account_id: null
   },
   data() {
      return {
         transaction_list: null
      }
   },
   computed: {
      ...mapState('transactions', ['transactions_tree']),
      ...mapGetters('transactions', ['transactions_by_account'])
   },
   methods: {
      ...mapActions('transactions', ['getTransactionsByAccount'])
   },
   created() {
      if (this.transactions_by_account(this.account_id).length == 0) {
         this.getTransactionsByAccount(this.account_id).then(() => {
            this.transaction_list = this.transactions_by_account(
               this.account_id
            )
         })
      }
      this.transaction_list = this.transactions_by_account(this.account_id)
   }
}
</script>

<style lang="scss" scoped></style>
