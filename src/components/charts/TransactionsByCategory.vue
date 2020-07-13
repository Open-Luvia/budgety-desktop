<template>
   <div class="expense-by-category">
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
      this.options = {
         tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
         },
         series: [
            {
               type: 'pie',
               radius: ['30%', '70%'],
               avoidLabelOverlap: false,
               emphasis: {
                  label: {
                     show: true,
                     fontSize: '18',
                     fontWeight: 'bold'
                  }
               },
               labelLine: {
                  show: false
               },
               data: JSON.parse(JSON.stringify(this.chartdata))
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
.expense-by-category
   width: 100%
   height: 100%
.chart
   width: 100%
   height: 100%
</style>
