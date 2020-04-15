<template>
   <div class="transactionForm">
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
         <div class="description">
            <BaseInput placeholder="Descrizione" />
         </div>
         <div class="item" v-for="item in items" :key="item.id">
            <div class="name-input">
               <BaseInput class="name" placeholder="Nome" />
            </div>
            <div class="other-informations">
               <BaseSelect
                  class="category"
                  placeholder="Categoria"
                  :options="categories"
               />
               <BaseInput class="amount" placeholder="Prezzo" />
               <div class="delete" @click="deleteItem">
                  <font-awesome-icon
                     icon="trash"
                     :style="{ color: '#FF5B57' }"
                     size="lg"
                  />
               </div>
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
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         items: [],
         categories: ['Spesa', 'Svago']
      }
   },
   methods: {
      addItem() {
         const item = {
            name: '',
            amount: NaN,
            categoryID: NaN
         }
         this.items.push(item)
      },
      deleteItem() {
         this.items.pop()
      }
   },
   created() {
      this.addItem()
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.transactionForm
   width: 100%
   height: 100%
   background: white;
   .header
      background-color: map-get($colors, 'primary')
      font-size: 24px
      font-weight: 500
      height: 2.5em
      line-height: 2.5em
      color: white
      display: grid
      grid-template-columns: 50px auto 50px
      .title
         grid-column: 2/3
      .exit
         grid-column: 1/2
   .body
      .item
         margin: 10px 10px 10px 10px
         display: flex
         width: inherit
         justify-content: space-between
         .name-input
            flex-grow: 1
            .name
               margin: 0px 10px 0px 0px
         .other-informations
            display: flex
            flex-direction: row
            flex-basis: content
            .amount
               width: 100px
            .category
               margin: 0px 10px 0px 0px
               width: 150px
               box-sizing: border-box
            .delete
               display: flex
               align-items: center
               height: inherit
               margin: 10px
               cursor: pointer
      .new-item-button
         align-items: center
         color: map-get($colors, 'new-line')
         display: flex
         font-size: 18px
         font-weight: 500
         justify-content: center
         margin: 10px 10px 0px 10px
         cursor: pointer
         .new-item-text
            padding: 0px 10px 0px 10px
      .description
         margin: 10px 10px 10px 10px
</style>
