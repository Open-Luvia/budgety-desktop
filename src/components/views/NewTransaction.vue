<template>
   <div class="new-transaction">
      <ModalHeader back_to="accounts" :toggle_switch="true">
         Nuova Transazione
      </ModalHeader>
      <div class="body">
         <div class="transaction-info">
            <div class="description">
               <BaseInput
                  placeholder="Descrizione"
                  @input="updateDescription"
               />
            </div>
            <div class="type">
               <BaseToggleSwitch :default_option="0" @selected="changeType" />
            </div>
         </div>
         <div class="item-title">
            Articoli:
         </div>
         <div class="item" v-for="item in transaction.items" :key="item.id">
            <BaseInput
               class="name"
               :placeholder="item.name"
               v-model="item.name"
            />
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
         is_expense: true
      }
   },
   computed: {
      ...mapGetters('categories', ['expense_categories', 'income_categories'])
   },
   methods: {
      ...mapActions('categories', ['getCategories']),
      ...mapActions('transactions', ['newTransaction']),
      addItem() {
         const item = {
            name: 'Nome',
            amount: null,
            category_id: null
         }
         this.transaction.items.push(item)
      },
      deleteItem() {
         this.transaction.items.pop()
      },
      submit() {
         if (this.is_expense == true) {
            this.transaction.items.forEach(item => {
               item.amount = -Math.abs(item.amount)
            })
         }
         this.newTransaction(this.transaction)
         this.$router.back()
      },
      changeType(selected_option) {
         if (selected_option === 0) {
            this.is_expense = true
         } else {
            this.is_expense = false
         }
      },
      updateDescription(description) {
         this.transaction.description = description
         this.transaction.items[0].name = description
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
      .transaction-info
         display: flex
         margin: 10px 10px 10px 10px
         .description
            align-items: center
            display: flex
            flex-grow: 1
            justify-content: stretch
         .type
            display: flex
            flex-basis: auto
            flex-grow: 0
            margin: 0px 0px 0px 10px
      .item-title
         font-size: 22px
         font-weight: 600
         display: flex
         justify-content: flex-start
         padding: 0px 15px 0px 15px
      .item
         align-items: center
         column-gap: 10px
         display: grid
         grid-template-areas: "name price category delete"
         grid-template-columns: auto 150px 100px 50px
         grid-template-rows: auto
         margin: 0px 10px 10px 10px
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
      .confirmation-buttons
         align-items: center
         display: flex
         justify-content: flex-end
         .button
            margin: 0px 10px 0px 0px
</style>
