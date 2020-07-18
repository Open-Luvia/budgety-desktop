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
            //    left: 0,
            //    top: 0,
            //    right: 0,
            //    bottom: 0
            // },
            xAxis: {
               type: 'category',
               data: this.chartdata.dates
            },
            yAxis: {
               type: 'value'
            },
            series: [
               {
                  name: 'Cash Flow',
                  data: this.chartdata.values,
                  type: 'line',
                  smooth: true,
                  areaStyle: {},
                  color: '#44d7b6'
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
