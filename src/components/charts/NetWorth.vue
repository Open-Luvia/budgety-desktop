<template>
   <v-chart :options="options" autoresize />
</template>

<script>
export default {
   props: {
      chartdata: {
         type: Object,
         required: true
      }
   },
   computed: {
      options () {
         return {
            legend: { show: true },
            tooltip: { show: true },
            // grid: {
            //    left: '4%',
            //    top: '5%',
            //    right: '4%',
            //    bottom: '5%'
            // },
            xAxis: {
               type: 'category',
               data: this.chartdata.dates,
               boundaryGap: false
            },
            yAxis: {
               type: 'value'
            },
            series: [
               // {
               //    name: 'Incomes',
               //    data: this.chartdata.incomes,
               //    type: 'line',
               //    smooth: false,
               //    areaStyle: {},
               //    color: '#7CEA9C'
               // },
               // {
               //    name: 'Expenses',
               //    data: this.chartdata.expenses,
               //    type: 'line',
               //    smooth: false,
               //    areaStyle: {},
               //    color: '#ff715b'
               // },
               {
                  name: 'Net Worth',
                  data: this.chartdata.values,
                  type: 'line',
                  areaStyle: {},
                  color: '#44d7b6',
                  smooth: false
               }
            ]
         }
      }
   }
}
</script>

<style lang="sass" scoped>
/**
 * MUST INCLUDE FOR ECHART
 */
.echarts
   width: 100%
   height: 100%
</style>
