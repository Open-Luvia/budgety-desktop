<template>
   <div class="new-transaction">
      <ModalHeader back_to="accounts">
         Nuova Transazione
      </ModalHeader>
      <div class="body">
         <div class="description">
            <BaseInput
               placeholder="Descrizione"
               v-model="transaction.description"
            />
            <BaseSelect
               v-model.number="type"
               :options="type_of_transaction"
               placeholder="Tipo"
            />
         </div>
         <div class="item" v-for="item in transaction.items" :key="item.id">
            <BaseInput class="name" placeholder="Nome" v-model="item.name" />
            <BaseSelect
               v-if="is_expense"
               class="category"
               placeholder="Categoria"
               :options="expense_categories"
               v-model.number="item.category_id"
            />
            <BaseSelect
               v-else
               class="category"
               placeholder="Categoria"
               :options="income_categories"
               v-model.number="item.category_id"
            />
            <BaseInput
               class="price"
               placeholder="Prezzo"
               v-model.number="item.amount"
               type="number"
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
            <BaseButton class="button" button_class="cancel">
               <router-link :to="{ name: 'accounts' }">
                  Annulla
               </router-link>
            </BaseButton>
            <BaseButton class="button" button_class="tertiary" @click="submit">
               Conferma
            </BaseButton>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ModalHeader from '@/components/ModalHeader.vue'

export default {
   components: {
      ModalHeader
   },
   props: {
      id: null //account_id received from router-link params
   },
   data() {
      return {
         transaction: {
            description: null,
            date: '2019-10-06 17:30:13',
            account_id: null,
            items: []
         },
         type: 0,
         type_of_transaction: [
            {
               name: 'Spesa',
               id: 0
            },
            {
               name: 'Entrata',
               id: 1
            }
         ]
      }
   },
   computed: {
      ...mapGetters('categories', ['expense_categories', 'income_categories']),
      is_expense() {
         return this.type == 0
      }
   },
   methods: {
      ...mapActions('categories', ['getCategories']),
      ...mapActions('transactions', ['newTransaction']),
      addItem() {
         const item = {
            name: '',
            amount: null,
            category_id: null
         }
         this.transaction.items.push(item)
      },
      deleteItem() {
         this.transaction.items.pop()
      },
      submit() {
         this.newTransaction(this.transaction)
         this.$router.back()
      }
   },
   created() {
      this.transaction.account_id = parseInt(this.id)
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
