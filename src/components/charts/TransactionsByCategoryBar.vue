<template>
   <div class="transactions-by-category-bar">
      <div class="category" v-for="(category, index) in data" :key="index">
         <div class="infos">
            <div
               class="color-indicator"
               :style="{ background: colors[index % colors.length] }"
            ></div>
            <div class="title">{{ category.name }}</div>
            <div class="amount">{{ category.value }} €</div>
         </div>
         <div class="percentage">
            <div
               class="max"
               :style="{
                  background: colors[index % colors.length],
                  width: (category.value / maxSum) * 100 + '%'
               }"
            ></div>
         </div>
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
   created () {},
   data () {
      return {
         colors: [
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
   },
   computed: {
      maxSum () {
         var sum = 0
         this.chartdata.forEach(category => {
            sum += category.value
         })
         return sum
      },
      data () {
         return this.chartdata
      }
      // options () {
      //    let series = []
      //    this.chartdata.forEach(data => {
      //       series.push({
      //          name: data.name,
      //          type: 'bar',
      //          stack: data.name,
      //          label: {
      //             formatter: '      ' + data.name + ' : {c}',
      //             show: true,
      //             position: 'insideLeft',
      //             fontSize: 14
      //          },
      //          data: [data.value],
      //          barWidth: 36
      //       })
      //    })
      //    return {
      //       xAxis: [
      //          {
      //             show: false,
      //             type: 'value'
      //          }
      //       ],
      //       yAxis: [
      //          {
      //             show: false,
      //             type: 'category',
      //             data: ['']
      //          }
      //       ],
      //       grid: {
      //          left: 0,
      //          top: 0,
      //          right: 0
      //       },
      //       series: series,
      //       color: [
      //          '#56ED96',
      //          '#5497A7',
      //          '#292f36',
      //          '#ffd447',
      //          '#87ff65',
      //          '#81f499',
      //          '#a2d729',
      //          '#50858b',
      //          '#0a0908',
      //          '#caf7e2',
      //          '#aceb98'
      //       ]
      //    }
      // }
   }
}
</script>

<style lang="sass" scoped>
.transactions-by-category-bar
   border-radius: 16px;
   overflow: hidden;
   border: 1px solid #eee

.category
   position: relative
   text-align: left
   padding: 12px 24px

   &:hover
      background: #fafafa


   .color-indicator
      position: absolute
      top: 0
      left: 0
      content: ' '
      width: 10px
      height: 100%

   .percentage
      position: relative
      height: 5px
      width: 100%
      background: #eee
      margin-top: 8px
      border-radius: 8px

      .max
         position: absolute
         top: 0
         left: 0
         height: 5px
         border-radius: 8px


   .infos
      display: flex
      justify-content: space-between

      .title
         font-size: 16px




/**
 * MUST INCLUDE FOR ECHART
 */
// .echarts
//    width: 100%
//    height: 100%
// .transactions-by-category-bar
//    width: 100%
//    height: 100%
// .chart
//    width: 100%
//    height: 100%
</style>
