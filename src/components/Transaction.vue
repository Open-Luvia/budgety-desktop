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
       background-color: map-get($colors, "positive-transaction")
       border-radius: 12px
       color: white
       display: flex
       height: 2em
       justify-content: center
       margin: 6px 0px 6px 0px
       width: 120px
</style>
