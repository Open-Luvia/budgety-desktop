<template>
   <div class="fullscreen">
      <Navbar />

      <div class="monthly-data">
         <div class="monthly-chart">
            <div
               class="year-data"
               v-for="year in income_expense.by_month.report"
               :key="year.label"
            >
               <div class="year-descriptor">{{ year.label }}</div>
               <div
                  v-for="month in year.data"
                  :key="month.label"
                  @click="changeActiveMonth(year.label, month.label)"
               >
                  <IncomeExpense
                     :class="{
                        'active-chart':
                           month.label == active_month &&
                           year.label == active_year,
                        'month-chart': true
                     }"
                     :max="income_expense.by_month.max_value"
                     :chartdata="month"
                  />
               </div>
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

      <div class="category-data">
         <div class="expense" v-if="active_month_expense_data">
            <span class="title">Spese per categoria</span>
            <TransactionsByCategory
               class="pie"
               :chartdata="active_month_expense_data.data"
            />
            <TransactionsByCategoryBar
               class="bar"
               :chartdata="active_month_expense_data.data"
            />
         </div>
         <div class="income" v-if="active_month_income_data">
            <span class="title">Entrate per categoria</span>
            <TransactionsByCategory
               class="pie"
               :chartdata="active_month_income_data.data"
            />
            <TransactionsByCategoryBar
               class="bar"
               :chartdata="active_month_income_data.data"
            />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import IncomeExpense from '@/components/charts/IncomeExpense.vue'
import TransactionsByCategory from '@/components/charts/TransactionsByCategory.vue'
import TransactionsByCategoryBar from '@/components/charts/TransactionsByCategoryBar.vue'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
   components: {
      IncomeExpense,
      TransactionsByCategory,
      TransactionsByCategoryBar,
      Navbar
   },
   data () {
      return {
         active_year: -1,
         active_month: -1,
         active_year_data: null,
         active_month_data: null,
         active_month_expense_data: null,
         active_month_income_data: null
      }
   },
   computed: {
      ...mapGetters('transactions', [
         'transactions_by_account',
         'transactions_by_account_is_empty'
      ]),
      ...mapState('reports', [
         'income_expense',
         'expense_by_category',
         'income_by_category'
      ])
   },
   methods: {
      ...mapActions('reports', [
         'generateReportByMonth',
         'generateIncomeOrExpenseReportByMonth'
      ]),

      changeActiveMonth (year, month) {
         this.active_year = year
         this.active_month = month

         this.active_year_data = this.income_expense.by_month.report.find(
            obj => obj.label === this.active_year
         )

         this.active_month_data = this.active_year_data.data.find(
            obj => obj.label === this.active_month
         )
         this.active_month_expense_data = this.expense_by_category.by_month
            .find(obj => obj.label === this.active_year)
            .data.find(obj => obj.label === this.active_month)

         this.active_month_income_data = this.income_by_category.by_month
            .find(obj => obj.label === this.active_year)
            .data.find(obj => obj.label === this.active_month)
      }
   },
   created () {
      this.generateReportByMonth()
      this.generateIncomeOrExpenseReportByMonth(true)
      this.generateIncomeOrExpenseReportByMonth(false)

      this.changeActiveMonth(
         this.income_expense.by_month.report[0].label,
         this.income_expense.by_month.report[0].data[0].label
      )
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
   margin-bottom: 40px

.monthly-chart
   width: 100%
   display: flex
   margin-left: 30px

.year-data
   display: flex
   margin-right: 40px
   position: relative

.year-descriptor
   position: absolute
   width: 36px
   left: calc(50% - 18px)
   top: 10px
   font-weight: bold

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
   padding-top: 50px

.active-chart
   background-color: #e5e5e5 // SAME COLOR

.category-data
   display: grid
   grid: "expense income" auto / 50% 50%
   padding: 10px 0px 10px 0px
   >.expense
      display: grid
      grid: "title" 30px "pie" 300px "bar" 300px/ 100%
      >.title
         font-size: 22px
         font-weight: 700
         grid-area: title
      >.pie
         grid-area: pie
      >.bar
         grid-area: bar
         justify-self: top
         padding: 0 120px
   >.income
      display: grid
      grid: "title" 30px "pie" 300px "bar" 300px/ 100%
      >.title
         font-size: 22px
         font-weight: 700
         grid-area: title
      >.pie
         grid-area: pie
      >.bar
         grid-area: bar
         justify-self: top
         padding: 0 120px
</style>
