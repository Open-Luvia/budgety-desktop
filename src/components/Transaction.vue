<template>
   <div class="transaction" @click="showItems">
      <div class="transaction-info">
         <div class="info">
            <div class="date">
               {{ transaction.date }}
            </div>
            <div class="note">
               {{ transaction.description }}
            </div>
         </div>
         <div v-if="is_amount_negative" class="amount negative">
            {{ abs_amount }} €
         </div>
         <div v-else class="amount positive"> {{ abs_amount }} € </div>
      </div>
      <div class="items" v-show="show_items">
         Articoli:
         <div v-for="item in transaction.items" :key="item.id" class="item">
            <div class="category">
               {{ getCategoryName(item.category_id) }}
            </div>
            <div class="name">
               {{ item.name }}
            </div>
            <div class="amount">
               {{ item.amount }}
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
   props: {
      transaction: Object
   },
   data() {
      return {
         show_items: true
      }
   },
   computed: {
      ...mapState('categories', ['categories']),
      is_amount_negative() {
         return this.transaction.amount < 0
      },
      abs_amount() {
         return Math.abs(this.transaction.amount)
      }
   },
   methods: {
      showItems() {
         this.show_items = !this.show_items
      },
      getCategoryName(id) {
         return this.categories.find(category => category.id == id).name
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
    flex-direction: column
    font-weight: 500
    margin-left: 15px
    margin-right: 15px
    .transaction-info
       font-size: 20px
       display: flex
       flex-direction: row
       .info
          display: flex
          width: calc( 100% - 120px )
          .date
             align-items: center
             display: flex
             flex-basis: content
             justify-content: flex-start
          .note
             align-items: center
             display: flex
             justify-content: flex-start
             margin: 0px 50px 0px 50px
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
    .items
       .item
          font-size: 16px
          width: 100%
          height: 2em
          display: flex
          justify-content: space-between
          align-items: center
</style>
