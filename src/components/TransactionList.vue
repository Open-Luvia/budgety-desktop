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
import { mapState, mapActions } from 'vuex'
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
      ...mapState('transactions', ['transactions'])
   },
   methods: {
      ...mapActions('transactions', ['getTransactionsByAccount'])
   },
   created() {
      if (
         this.transactions.get(this.account_id) == undefined ||
         this.transactions.get(this.account_id).length == 0
      ) {
         this.getTransactionsByAccount(this.account_id).then(() => {
            this.transaction_list = this.transactions.get(this.account_id)
         })
      }
      this.transaction_list = this.transactions.get(this.account_id)
   }
}
</script>

<style lang="scss" scoped></style>
