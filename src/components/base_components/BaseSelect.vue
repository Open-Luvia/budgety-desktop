<template>
   <div class="container">
      <select
         :value="value"
         v-on="listeners"
         @change="updateValue"
         :placeholder="placeholder"
      >
         <option
            v-for="option in options"
            :value="option"
            :key="option.id"
            :selected="option === value"
            >{{ option }}</option
         >
      </select>
   </div>
</template>

<script>
import { formListener } from '@/mixins/formListener.mixin.js'
export default {
   mixins: [formListener],
   props: {
      options: {
         type: Array,
         required: true
      },
      placeholder: String
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.container
   border-radius: 18px
   overflow: hidden
   display: inline-block
   select
      width: inherit
      height: 100%
      background-color: map-get($colors, 'input')
      border: none
      outline: none
</style>
