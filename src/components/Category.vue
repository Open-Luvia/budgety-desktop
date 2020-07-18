<template>
   <div class="category">
      <div class="category-name">
         <div class="title">
            <input type="checkbox" /> {{ category.name }}
         </div>

         <div class="edit-options">
            <div
               class="dropdown-button"
               v-if="category.children.length != 0"
               @click="showSubCategories"
            >
               <BaseIcon
                  height="20"
                  width="20"
                  :class="{
                     'dropdown-reverse':
                        category.children.length != 0 && show_sub_categories,
                     dropdown: !show_sub_categories
                  }"
               >
                  <IconChervonCircleDown /> </BaseIcon
            ></div>
         </div>
      </div>

      <transition name="height-expansion" mode="out-in">
         <div
            class="children"
            :style="{ height: children_height + 'px' }"
            v-if="show_sub_categories && category.children.length != 0"
         >
            <div
               class="child-category"
               v-for="(child, index) in category.children"
               :key="index"
            >
               <div class="title">
                  <input type="checkbox" /> {{ child.name }}
               </div>
            </div>
         </div>
      </transition>
   </div>
</template>

<script>
import IconChervonCircleDown from '@/assets/icons/IconChevronCircleDown'

export default {
   components: {
      IconChervonCircleDown
   },
   props: {
      category: Object
   },
   data () {
      return {
         show_sub_categories: true,
         children_height: parseInt(this.category.children.length) * 45,

         colors: [
            '#56ED96',
            '#ffd447',
            '#5497A7',
            '#292f36',
            '#87ff65',
            '#81f499',
            '#a2d729',
            '#50858b',
            '#0a0908',
            '#caf7e2',
            '#aceb98'
         ]
      }
   },
   methods: {
      showSubCategories () {
         this.show_sub_categories = !this.show_sub_categories
      }
   }
}
</script>

<style lang="sass" scoped>
.category-name
   position: relative
   display: flex
   justify-content: space-between
   padding: 12px 16px
   font-size: 16px
   background: white
   font-weight: 600
   border-bottom: 1px solid #ccc

   .color-indicator
      position: absolute
      top: 0
      left: 0
      content: ' '
      width: 10px
      height: 100%

   .dropdown-button
      cursor: pointer

.children
   overflow: hidden
   text-align: left
   border-bottom: 1px solid #ccc

   .child-category
      border-bottom: 1px solid #eee
      padding: 10px 36px

      &:last-child
         border: 0


.dropdown-reverse
   transform: rotate(-180deg)
   transition: .4s linear all
.dropdown
   transition: .4s linear all
</style>
