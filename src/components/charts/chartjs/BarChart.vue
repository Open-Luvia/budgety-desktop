<template>
   <div class="bar-chart">
      <v-chart :options="options" autoresize />
   </div>
</template>

<script>
export default {
   props: {
      options: Object
   }
}
</script>

<style scoped lang="sass">
.bar-chart
   width: 100%
   height: 100%
.echarts
   width: 100%
   height: 100%
</style>
