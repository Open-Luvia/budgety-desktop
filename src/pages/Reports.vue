<template>
   <div class="report-container">
      <Navbar />
      <div class="body">
         <div class="graph-container">
            <h2 class="title">Annual Net Worth</h2>
            <div class="graph">
               <NetWorth :chartdata="networth" />
            </div>
         </div>
         <div class="graph-container">
            <h2 class="title">Annual Cash Flow</h2>
            <div class="graph">
               <CashFlow :chartdata="cashflow" />
            </div>
         </div>
         <div style="height:1px">
            <!-- CHEAT DIV -->
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NetWorth from '@/components/charts/NetWorth.vue'
import CashFlow from '@/components/charts/CashFlow.vue'
import { mapActions, mapState } from 'vuex'

export default {
   components: {
      Navbar,
      NetWorth,
      CashFlow
   },
   computed: {
      ...mapState('reports', ['networth', 'cashflow'])
   },
   methods: {
      ...mapActions('reports', ['generateAdvanceReports'])
   },
   created () {
      this.generateAdvanceReports()
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'

.report-container
   background: #fafafa

.body
   margin-top: 30px

.graph-container
   // width: 66%
   background: white
   margin: 30px
   border-bottom: 2px solid #eee
   -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
   -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1)
   -webkit-border-radius: 16px
   -moz-border-radius: 16px
   border-radius: 16px

   .title
      border-bottom: 2px solid #eee
      text-align: left
      padding-left: 20px
      padding-top: 15px
      padding-bottom: 15px
      margin: 0

   .graph
      height: 50vh
      // padding: 30px
</style>
