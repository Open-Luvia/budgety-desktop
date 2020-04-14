<template>
   <div class="transaction">
      <div class="date">
         {{ date }}
      </div>
      <div class="note">
         {{ note }}
      </div>
      <div class="amount">
         {{ amount }} $
      </div>
   </div>
</template>

<script>
export default {
   props: {
      amount: Number,
      note: String,
      date: String
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
    padding: 10px
    .date
       display: flex
       align-items: center
       justify-content: flex-start
    .note
       display: flex
       align-items: center
       justify-content: flex-start
    .amount
       background-color: map-get($colors, "positive-transaction")
       color: white
       display: flex
       align-items: center
       justify-content: center
       margin: 6px 0px 6px 0px
       width: 5em
       height: 2em
       border-radius: 12px
</style>
