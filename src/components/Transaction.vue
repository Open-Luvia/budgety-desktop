<template>
   <div class="transaction">
      <div class="info">
         <div class="date">
            {{ date }}
         </div>
         <div class="note">
            {{ note }}
         </div>
      </div>
      <div v-if="is_amount_negative" class="amount negative">
         {{ abs_amount }} €
      </div>
      <div v-else class="amount positive"> {{ abs_amount }} € </div>
   </div>
</template>

<script>
export default {
   props: {
      amount: Number,
      note: String,
      date: String
   },
   computed: {
      is_amount_negative() {
         return this.amount < 0
      },
      abs_amount() {
         return Math.abs(this.amount)
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.transaction
    border-bottom: 1px solid black
    box-sizing: border-box
    display: flex
    font-size: 20px
    font-weight: 500
    justify-content: space-between
    margin-left: 15px
    margin-right: 15px
    .info
       display: flex
       width: calc( 100% - 120px )
       .date
          align-items: center
          display: flex
          flex-grow: 1
          justify-content: flex-start
       .note
          align-items: center
          display: flex
          flex-grow: 3
          justify-content: flex-start
    .amount
       align-items: center
       border-radius: 12px
       color: white
       display: flex
       height: 2em
       justify-content: center
       margin: 6px 0px 6px 0px
       width: 120px
    .negative
       background-color: map-get($colors, "negative-transaction")
    .positive
       background-color: map-get($colors, "positive-transaction")
</style>
