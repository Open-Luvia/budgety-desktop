<!-- TransactionList è un componente a parte perchè la lista di transazioni veniva renderizzata 
prima che le API riuscissero a restituire i dati. Ora il componente viene renderizzato 
solo se le transazioni sono state effetivamente caricate.  -->
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
import { mapActions, mapGetters } from 'vuex'
export default {
   components: {
      Transaction
   },
   props: {
      account_id: null
   },
   computed: {
      ...mapGetters('transactions', ['transactions_by_account']),
      transaction_list() {
         return this.transactions_by_account(this.account_id)
      }
   },
   methods: {
      ...mapActions('transactions', ['getTransactionsByAccount'])
   },
   created() {
      if (this.transactions_by_account(this.account_id).length == 0) {
         this.getTransactionsByAccount(this.account_id)
      }
   }
}
</script>

<style lang="scss" scoped></style>
