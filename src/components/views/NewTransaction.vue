<template>
   <div class="new-transaction">
      <div class="header">
         <div class="exit">
            <router-link :to="{ name: 'accounts' }">
               <font-awesome-icon icon="chevron-left" />
            </router-link>
         </div>
         <div class="title">
            Nuova Transazione
         </div>
      </div>
      <div class="body">
         <form @submit.prevent="submit">
            <div class="description">
               <BaseInput
                  placeholder="Descrizione"
                  v-model="transaction.description"
               />
            </div>
            <div class="item" v-for="item in transaction.items" :key="item.id">
               <BaseInput class="name" placeholder="Nome" v-model="item.name" />
               <BaseSelect
                  class="category"
                  placeholder="Categoria"
                  :options="categories"
                  v-model.number="item.categoryID"
               />
               <BaseInput
                  class="price"
                  placeholder="Prezzo"
                  v-model.number="item.amount"
               />
               <div class="delete" @click="deleteItem">
                  <font-awesome-icon
                     icon="trash"
                     :style="{ color: '#FF5B57' }"
                     size="lg"
                  />
               </div>
            </div>
            <div class="new-item-button">
               <font-awesome-icon
                  icon="plus-circle"
                  :style="{ color: '#A7AEB7' }"
               />
               <div class="new-item-text" @click="addItem">
                  Nuovo elemento
               </div>
            </div>
            <div class="confirmation-buttons">
               <BaseButton class="button" buttonClass="cancel"
                  >Annulla</BaseButton
               >
               <BaseButton class="button" buttonClass="tertiary" type="submit"
                  >Conferma</BaseButton
               >
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
   props: {
      id: String
   },
   data() {
      return {
         transaction: {
            description: null,
            date: '2019-10-06 17:30:13',
            accountID: null,
            items: []
         }
      }
   },
   computed: {
      ...mapState('categories', ['categories'])
   },
   methods: {
      ...mapActions('categories', ['getCategories']),
      ...mapActions('transactions', ['newTransaction']),
      addItem() {
         const item = {
            name: '',
            amount: null,
            categoryID: null
         }
         this.transaction.items.push(item)
      },
      deleteItem() {
         this.transaction.items.pop()
      },
      submit() {
         this.newTransaction(this.transaction)
      }
   },
   created() {
      this.transaction.accountID = parseInt(this.id)
      this.addItem()
      this.getCategories()
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.new-transaction
   background: white;
   height: 100%
   width: 100%
   .header
      background-color: map-get($colors, 'primary')
      color: white
      display: grid
      font-size: 24px
      font-weight: 500
      grid-template-columns: 50px auto 50px
      height: 2.5em
      line-height: 2.5em
      .title
         grid-column: 2/3
      .exit
         grid-column: 1/2
   .body
      .item
         align-items: center
         column-gap: 10px
         display: grid
         grid-template-areas: "name price category delete"
         grid-template-columns: auto 150px 100px 50px
         grid-template-rows: auto
         margin: 10px 10px 10px 10px
         width: inherit
         .name
            grid-area: name
         .category
            grid-area: price
         .price
            grid-area: category
         .delete
            grid-area: delete
      .new-item-button
         align-items: center
         color: map-get($colors, 'new-line')
         cursor: pointer
         display: flex
         font-size: 18px
         font-weight: 500
         justify-content: center
         margin: 10px 10px 0px 10px
         .new-item-text
            padding: 0px 10px 0px 10px
      .description
         margin: 10px 10px 10px 10px
      .confirmation-buttons
         align-items: center
         display: flex
         justify-content: flex-end
         .button
            margin: 0px 10px 0px 0px
</style>
