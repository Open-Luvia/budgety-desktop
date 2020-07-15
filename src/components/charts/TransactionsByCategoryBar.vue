<template>
   <div class="transactions-by-category-bar">
      <div class="chart">
         <v-chart :options="options" autoresize />
      </div>
   </div>
</template>

<script>
export default {
   props: {
      chartdata: {
         type: Array,
         required: true
      }
   },
   computed: {
      options () {
         let series = []
         this.chartdata.forEach(data => {
            series.push({
               name: data.name,
               type: 'bar',
               stack: data.name,
               label: {
                  formatter: '      ' + data.name + ' : {c}',
                  show: true,
                  position: 'insideLeft',
                  fontSize: 14
               },
               data: [data.value],
               barWidth: 36
            })
         })
         return {
            xAxis: [
               {
                  show: false,
                  type: 'value'
               }
            ],
            yAxis: [
               {
                  show: false,
                  type: 'category',
                  data: ['']
               }
            ],
            grid: {
               left: 0,
               top: 0,
               right: 0
            },
            series: series,
            color: [
               '#56ED96',
               '#5497A7',
               '#292f36',
               '#ffd447',
               '#87ff65',
               '#81f499',
               '#a2d729',
               '#50858b',
               '#0a0908',
               '#caf7e2',
               '#aceb98'
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
.transactions-by-category-bar
   width: 100%
   height: 100%
.chart
   width: 100%
   height: 100%
</style>
