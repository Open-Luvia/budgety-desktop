<template>
   <div class="fullscreen">
      <Navbar />

      <div class="monthly-data">
         <div class="monthly-chart">
            <div
               v-for="month in income_expense.by_month.report"
               :key="month.label"
               @click="changeActiveMonth(month.label)"
            >
               <IncomeExpense
                  :class="{
                     'active-chart': month.label == active_month,
                     'month-chart': true
                  }"
                  :max="income_expense.by_month.max_value"
                  :chartdata="month"
               />
            </div>
         </div>
         <div class="monthly-stat" v-if="active_month_data">
            <div class="monthly-stat-card stat-card-green">
               <h4>Entrate</h4>
               <div>{{ active_month_data.data[0] }}</div>
            </div>
            <div class="monthly-stat-card stat-card-red">
               <h4>Uscite</h4>
               <div>{{ active_month_data.data[1] }}</div>
            </div>
            <div class="monthly-stat-card">
               <h4>Totale</h4>
               <div>{{
                  active_month_data.data[0] - active_month_data.data[1]
               }}</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import IncomeExpense from '@/components/charts/IncomeExpense.vue'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
   components: {
      IncomeExpense,
      Navbar
   },
   data () {
      return {
         active_month: -1,
         active_month_data: null
      }
   },
   computed: {
      ...mapGetters('transactions', [
         'transactions_by_account',
         'transactions_by_account_is_empty'
      ]),
      ...mapState('reports', ['income_expense'])
   },
   methods: {
      ...mapActions('reports', ['generateReportByMonth']),

      changeActiveMonth (month) {
         this.active_month = month
         this.active_month_data = this.income_expense.by_month.report.find(
            obj => obj.label === this.active_month
         )
      }
   },
   created () {
      this.generateReportByMonth()
      this.changeActiveMonth(this.income_expense.by_month.report[0].label)
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'

.monthly-data
   display: grid
   grid-template: "monthly-chart" "monthly-stat"
   justify-items: stretch
   align-items: stretch

.monthly-chart
   width: 100%
   display: flex
   margin-left: 30px

.monthly-stat
   background-color: #e5e5e5 // SAME COLOR
   display: flex
   padding: 0px 30px


.monthly-stat-card
   width: 100%
   display: flex
   box-sizing: border-box
   justify-content: space-between
   border-left: 2px solid #444
   padding: 12px 24px
   margin: 24px 64px

   &:first-child
      margin-left: 0

   h4, div
      color: #444

   h4
      margin: 0
      padding: 0
      font-weight: bold

   div
      align-self: center
      font-size: 18px

      &::after
         content: " €"
         font-size: 14px

.stat-card-green
   border-color: #4FD889
   h4, div
      color: #4FD889

.stat-card-red
   border-color: #FF5B57
   h4, div
      color: #FF5B57

.month-chart
   height: 150px
   width: 50px
   box-sizing: content-box
   padding-left: 5px
   padding-right: 5px
   padding-bottom: 10px
   padding-top: 20px

.active-chart
   background-color: #e5e5e5 // SAME COLOR
</style>
