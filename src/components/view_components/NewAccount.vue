<template>
   <div class="new-transaction">
      <div class="header">
         <div class="exit">
            <router-link :to="{ name: 'accounts' }">
               <font-awesome-icon icon="chevron-left" />
            </router-link>
         </div>
         <div class="title">
            Nuovo Account
         </div>
      </div>
      <div class="body">
         <div class="form">
            <BaseInput class="name" placeholder="Nome Account" />
            <BaseInput class="balance" placeholder="Bilancio Iniziale" />
            <BaseSelect
               class="type"
               placeholder="Tipo"
               :options="accountTypes"
            />
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
         accountTypes: ['Credito', 'Contanti']
      }
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
      .form
         margin: 10px 10px 10px 10px
         display: grid
         grid-template-columns: auto auto
         grid-template-rows: auto auto
         column-gap: 10px
         row-gap: 10px
         .name
            grid-area: 1/1/2/3
         .balance
            grid-area: 2/1/2/2
         .type
            grid-area: 2/2/2/3
      .confirmation-buttons
         align-items: center
         display: flex
         justify-content: flex-end
         .button
            margin: 0px 10px 0px 0px
</style>
