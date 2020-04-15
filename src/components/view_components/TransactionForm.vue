<template>
   <div class="background">
      <div class="form">
         <div class="header">
            Nuova Transazione
         </div>
         <div class="body">
            <div class="description">
               <BaseInput placeholder="Descrizione" />
            </div>
            <div class="item" v-for="item in items" :key="item.id">
               <BaseInput class="name" placeholder="Nome" />
               <BaseInput class="amount" placeholder="Prezzo" />
               <div class="delete" @click="deleteItem">
                  <font-awesome-icon
                     icon="trash"
                     :style="{ color: '#FF5B57' }"
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
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         items: []
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
      deleteItem(){
         this.items.pop()
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.background
   width: calc(100vw - #{$sidebar-width})
   height: calc(100vh - #{$navbar-height})
   display: flex
   align-items: center
   justify-content: center
   background: rgba(0,0,0,0.2);
   position: absolute
   .form
      height: 600px
      width: 600px
      background: white
      border-radius: 20px
      .header
         background-color: map-get($colors, 'primary')
         border-radius: 20px 20px 0px 0px
         color: white
         font-size: 24px
         font-weight: 500
         height: 2.5em
         line-height: 2.5em
      .body
         .item
            margin: 10px 10px 10px 10px
            display: flex
            .amount
               width: 100px
            .name
               margin: 0px 10px 0px 0px
               flex-grow: 5
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
