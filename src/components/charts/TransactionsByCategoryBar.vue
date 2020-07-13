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
   data() {
      return {
         options: null
      }
   },
   created() {
      let categories = []
      let values = []
      this.chartdata.forEach(data => {
         categories.push(data.name)
         values.push(data.value)
      })
      this.options = {
         yAxis: {
            type: 'category',
            data: categories
         },
         xAxis: {
            type: 'value'
         },
         series: [
            {
               type: 'bar',
               data: values
            }
         ],
         color: [
            '#56ED96',
            '#ffd447',
            '#5497A7',
            '#292f36',
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
