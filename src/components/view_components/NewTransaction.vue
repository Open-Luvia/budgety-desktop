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
            <BaseButton class="button" buttonClass="cancel">Annulla</BaseButton>
            <BaseButton class="button" buttonClass="tertiary"
               >Conferma</BaseButton
            >
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
         display: flex
         justify-content: space-between
         margin: 10px 10px 10px 10px
         width: inherit
         .name-input
            flex-grow: 1
            .name
               margin: 0px 10px 0px 0px
         .other-informations
            display: flex
            flex-basis: content
            flex-direction: row
            .amount
               width: 100px
            .category
               box-sizing: border-box
               margin: 0px 10px 0px 0px
               width: 150px
            .delete
               align-items: center
               cursor: pointer
               display: flex
               height: inherit
               margin: 10px
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
