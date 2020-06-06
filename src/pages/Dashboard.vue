<template>
   <div class="fullscreen">
      <Navbar />
      <div class="monthly-chart">
         <div v-for="month in monthly_data" :key="month.label">
            <IncomeExpense :chartdata="month" :maxValue="maxValue" />
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import IncomeExpense from '@/components/charts/IncomeExpense.vue'

export default {
   components: {
      IncomeExpense,
      Navbar
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
   },
   computed: {
      maxValue () {
         var max = -1
         this.monthly_data.forEach(month => {
            if (max < month.data[0]) max = month.data[0]
            if (max < month.data[1]) max = month.data[1]
         })
         return max + max * 0.05
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
   .chart
      height: 100%
      width: 400px
</style>
