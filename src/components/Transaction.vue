<template>
   <div
      class="transaction"
      @click="showItems"
      @mouseover="showEdit"
      @mouseout="showEdit"
   >
      <div class="transaction-info">
         <div class="info">
            <div class="date">
               {{ transaction.date }}
            </div>
            <div class="note">
               {{ transaction.description }}
            </div>
         </div>
         <div class="edit-buttons" v-show="show_edit">
            <router-link
               :to="{
                  name: 'editTransaction',
                  params: { transaction: transaction }
               }"
            >
               <font-awesome-icon icon="edit" class="edit-button" size="lg" />
            </router-link>
            <font-awesome-icon
               icon="trash"
               class="delete-button"
               size="lg"
               @click="deleteTransaction(transaction.id)"
            />
         </div>
         <div :class="priceStyle(transaction.amount)">
            <span> {{ format(transaction.amount) }} € </span>
         </div>
      </div>
      <div class="items" v-show="show_items">
         <div v-for="item in transaction.items" :key="item.id" class="item">
            <div class="item-info">
               <div class="category">
                  {{ categoryName(item.category_id) }}
               </div>
               <div class="name">
                  {{ item.name }}
               </div>
            </div>
            <div :class="priceStyle(item.amount)">
               <span> {{ format(item.amount) }} € </span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { amountFormatter } from '@/mixins/amountFormatter.mixin.js'
export default {
   mixins: [amountFormatter],
   props: {
      transaction: Object
   },
   data() {
      return {
         show_items: false,
         show_edit: false
      }
   },
   computed: {
      ...mapState('categories', ['categories']),
      is_amount_negative() {
         return this.transaction.amount < 0
      }
   },
   methods: {
      ...mapActions('transactions', ['deleteTransaction']),
      priceStyle(amount) {
         var result = 'amount'
         if (amount < 0) {
            result += ' negative'
         } else {
            result += ' positive'
         }
         return result
      },
      showItems() {
         this.show_items = !this.show_items
      },
      showEdit() {
         this.show_edit = !this.show_edit
      },
      categoryName(id) {
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
      align-items: center
      display: flex
      flex-direction: row
      font-size: 20px
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
      font-size: 20px
      margin: 0px 0px 0px 50px
      .item
         align-items: center
         display: flex
         font-size: 18px
         height: 2em
         justify-content: space-between
         width: 100%
         .item-info
            display: flex
            .category
               align-items: center
               display: flex
               justify-content: flex-start
               width: 135px
            .name
               align-items: center
               display: flex
               justify-content: flex-start
               margin: 0px 50px 0px 50px
         .amount
            align-items: center
            border-radius: 9px
            color: white
            display: flex
            height: 1.5em
            justify-content: center
            margin: 6px 0px 6px 0px
            width: 120px
         .negative
            background-color: map-get($colors, "negative-transaction")
         .positive
            background-color: map-get($colors, "positive-transaction")
   .edit-buttons
      align-items: center
      display: flex
      justify-content: flex-end
      margin: 0px 15px 0px 0px
      .delete-button
         color: #232A33
         margin: 0px 10px 0px 0px
         &:hover
            color: #0091FF
      .edit-button
         color: #232A33
         margin: 0px 10px 0px 0px
         &:hover
            color: #0091FF
</style>
