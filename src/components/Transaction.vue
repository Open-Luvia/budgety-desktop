<template>
   <div class="transaction">
      <div class="transaction-element">
         {{ category_name }}
      </div>
      <div class="transaction-element">
         {{ date }}
      </div>
      <div class="transaction-element">
         {{ note }}
      </div>
      <div class="transaction-element amount">
         {{ amount }}
      </div>
   </div>
</template>

<script>
export default {
   props: {
      id: Number,
      amount: Number,
      note: String,
      date: String,
      category_name: String
   }
}
</script>

<style lang="sass" scoped>
.transaction
    width: 100%
    display: flex
    justify-content: space-between
    font-weight: 500
    font-size: 20px
    border-bottom: 4px solid black
    margin-left: 5px
    margin-right: 5px
    box-sizing: border-box
    .transaction-element
        padding: 10px
</style>
