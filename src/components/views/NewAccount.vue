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
            <BaseInput
               class="name"
               placeholder="Nome Account"
               v-model="account.name"
            />
            <BaseInput
               class="balance"
               placeholder="Bilancio Iniziale"
               v-model="account.initial_balance"
            />
            <BaseSelect
               class="type"
               placeholder="Tipo"
               :options="account_types"
            />
         </div>
         <div class="confirmation-buttons">
            <BaseButton class="button" button_class="cancel"
               ><router-link :to="{ name: 'accounts' }"
                  >Annulla</router-link
               ></BaseButton
            >
            <BaseButton class="button" button_class="tertiary" @click="submit"
               >Conferma</BaseButton
            >
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   data() {
      return {
         account_types: [
            {
               name: 'Contanti',
               id: 1
            },
            {
               name: 'Credito',
               id: 2
            }
         ],
         account: {
            name: '',
            initial_balance: null
         }
      }
   },
   methods: {
      ...mapActions('accounts', ['newAccount']),
      submit() {
         this.newAccount(this.account)
         this.$router.back()
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
         column-gap: 10px
         display: grid
         grid-template-areas: "name name" "balance type"
         grid-template-columns: auto auto
         grid-template-rows: auto auto
         margin: 10px 10px 10px 10px
         row-gap: 10px
         .name
            grid-area: name
         .balance
            grid-area: balance
         .type
            grid-area: type
      .confirmation-buttons
         align-items: center
         display: flex
         justify-content: flex-end
         .button
            margin: 0px 10px 0px 0px
</style>
