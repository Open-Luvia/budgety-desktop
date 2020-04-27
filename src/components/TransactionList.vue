<!-- TransactionList è un componente a parte perchè la lista di transazioni veniva renderizzata 
prima che le API riuscissero a restituire i dati. Ora il componente viene renderizzato 
solo se le transazioni sono state effetivamente caricate.  -->
<template>
   <div>
      <div v-if="!this.transactions_list_is_empty">
         <Transaction
            v-for="transaction in transaction_list"
            :transaction="transaction"
            :key="transaction.id"
         />
      </div>
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
      ...mapGetters('transactions', [
         'transactions_by_account',
         'transactions_by_account_is_empty'
      ]),
      transaction_list() {
         return this.transactions_by_account(this.account_id)
      },
      transactions_list_is_empty() {
         return this.transactions_by_account_is_empty(this.account_id)
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
