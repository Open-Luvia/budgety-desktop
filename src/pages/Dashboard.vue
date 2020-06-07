<template>
   <div class="fullscreen">
      <Navbar />
      <div class="monthly-chart">
         <div v-for="month in monthly_data" :key="month.label">
            <IncomeExpense :chartdata="month" class="month-chart" />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import IncomeExpense from '@/components/charts/IncomeExpense.vue'
import { mapGetters } from 'vuex'

export default {
   components: {
      IncomeExpense,
      Navbar
   },
   computed: {
      ...mapGetters('transactions', [
         'transactions_by_account',
         'transactions_by_account_is_empty'
      ]),
      graphData () {
         // var transactions = this.transactions_by_account(5)

         return ''
      }
   },
   created () {
      console.log()
   },
   data () {
      return {
         monthly_data: [
            {
               label: 'gen',
               data: [700, 1400]
            },
            {
               label: 'feb',
               data: [955, 1700]
            },
            {
               label: 'mar',
               data: [816, 1350]
            },
            {
               label: 'apr',
               data: [816, 1000]
            },
            {
               label: 'mag',
               data: [1200, 1400]
            }
         ]
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.monthly-chart
   height: 100px
   width: 100%
   display: flex
.month-chart
   height: 150px
   width: 40px
   margin: 30px 5px
</style>
