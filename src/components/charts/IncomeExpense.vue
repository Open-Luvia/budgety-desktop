<template>
   <div class="income-expense">
      <BarChart :options="options" :chartdata="formatted_data" />
   </div>
</template>

<script>
import BarChart from '@/components/charts/chartjs/BarChart.vue'

export default {
   components: {
      BarChart
   },
   props: {
      chartdata: {
         type: Object,
         required: true
      },
      maxValue: Number
   },
   data () {
      return {
         formatted_data: {
            labels: [this.chartdata.label],
            datasets: [
               //In questo modo vengono prefissati lo stile di spesa ed entrata
               {
                  label: 'Spesa',
                  backgroundColor: '#FF5B57',
                  barThickness: 8,
                  data: [this.chartdata.data[0]]
               },
               {
                  label: 'Entrata',
                  backgroundColor: '#4FD889',
                  barThickness: 8,
                  data: [this.chartdata.data[1]]
               }
            ]
         }
      }
   },
   computed: {
      options () {
         return {
            legend: {
               display: false
            },
            scales: {
               xAxes: [
                  {
                     gridLines: {
                        display: false
                     }
                  }
               ],
               yAxes: [
                  {
                     gridLines: {
                        display: false
                     },
                     ticks: {
                        display: false,
                        min: 0,
                        max: this.maxValue
                     }
                  }
               ]
            },
            tooltips: {
               mode: 'index',
               enabled: true,
               intersect: true
            }
         }
      }
   }
}
</script>

<style lang="sass" scoped>
.income-expense
   width: 50px
</style>
