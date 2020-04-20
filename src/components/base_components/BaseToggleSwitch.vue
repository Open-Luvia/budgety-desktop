<template>
   <div>
      <div class="toggle-switch">
         <div
            v-for="(option, index) in options"
            class="toggle-option"
            :key="index"
            :class="optionStyle(index)"
            @click="selectOption(index)"
         >
            <span>{{ option.label }}</span>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      options: {
         type: Array,
         required: false,
         default: () => {
            return [{ label: 'expense' }, { label: 'income' }]
         }
      },
      default_option: {
         type: Number,
         required: false
      },
      inverted_colors: {
         type: Boolean,
         required: false,
         default: false
      }
   },
   data() {
      return {
         selected_option_index: null
      }
   },
   methods: {
      selectOption(option_index) {
         this.selected_option_index = option_index
      },
      optionStyle(option_index) {
         var result = 'toggle-option'
         if (this.inverted_colors) {
            result += ' inverted'
         }
         if (option_index === this.selected_option_index) {
            if (this.inverted_colors) {
               result += ' selected-option-inverted'
            } else {
               result += ' selected-option'
            }
         }
         if (option_index === 0) {
            result += ' first-option'
         }
         if (option_index == this.options.length - 1) {
            result += ' last-option'
         }
         return result
      }
   },
   created() {
      this.selected_option_index = this.default_option
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.toggle-switch
   font-size: 16px
   font-weight: 800
   display: flex
   flex-direction: row
   align-items: center
   justify-content: stretch
   cursor: pointer
   .toggle-option
      font-size: inherit
      padding: 0px
      border-width: 4px 2px 4px 2px
      border-style: solid
      display: flex
      height: 2.5em
      align-items: center
      justify-content: center
      width: 5em
      color: map-get($colors, "primary")
      border-color: map-get($colors, "primary")
      background-color: white
   .inverted
      color: white
      border-color: white
      background-color: map-get($colors, "primary")
   .first-option
      border-radius: 10px 0px 0px 10px
      border-left-width: 4px !important
   .last-option
      border-radius: 0px 10px 10px 0px
      border-right-width: 4px !important
   .selected-option
      border-radius: 10px
      font-size: inherit
      height: 3.5em
      background: map-get($colors, "primary") !important
      color: white !important
   .selected-option-inverted
      border-radius: 10px
      font-size: inherit
      height: 3.5em
      background: white !important
      color: map-get($colors, "primary") !important
</style>
