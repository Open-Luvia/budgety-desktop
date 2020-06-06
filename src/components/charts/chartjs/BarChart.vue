<script>
import { Bar } from 'vue-chartjs'
// import Chart from 'chart.js'

// Chart.Tooltip.positioners.cursor = function (elements, coords) {
//    return coords
// }

export default {
   extends: Bar,
   props: ['chartdata', 'options'],

   mounted () {
      this.renderChart(this.chartdata, this.options)
   }
}
</script>

<style></style>
