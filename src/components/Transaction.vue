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
      <div class="amount"> {{ amount }} $ </div>
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
    justify-content: space-between
    display: flex
    font-size: 20px
    font-weight: 500
    margin-left: 15px
    margin-right: 15px
    .info
       display: flex
       width: calc( 100% - 120px )
       .date
          display: flex
          align-items: center
          justify-content: flex-start
          flex-grow: 1
       .note
          flex-grow: 3
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
       width: 120px
       height: 2em
       border-radius: 12px
</style>
