<template>
   <div>
      <div class="category">
         <div class="category-name" @click="showSubCategories">
            <span>
               {{ this.category.name }}
            </span>
            <BaseIcon
               height="20"
               width="20"
               :class="{
                  'dropdown-reverse':
                     this.category.children.length != 0 &&
                     this.show_sub_categories,
                  dropdown: !this.show_sub_categories
               }"
            >
               <IconChervonCircleDown />
            </BaseIcon>
         </div>
         <div
            class="children"
            v-if="
               this.show_sub_categories && this.category.children.length != 0
            "
         >
            <div
               class="child-category"
               v-for="child in category.children"
               :key="child.id"
            >
               {{ child.name }}
            </div>
         </div>
      </div>
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
   data() {
      return {
         show_sub_categories: true
      }
   },
   methods: {
      showSubCategories() {
         this.show_sub_categories = !this.show_sub_categories
      }
   }
}
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: all .2s
.category
   align-items: flex-start
   display: flex
   flex-direction: column
   cursor: pointer
   padding: 0px
   // border-width: 1px 0px 1px 0px
   // border-color: black
   // border-style: solid
   padding: 10px
   margin: 0px 10px 0px 10px
   box-sizing: border-box
   transition: 1s linear all
   width: calc(100% - 10px)
   .category-name
      width: inherit
      display: flex
      align-items: center
      justify-content: space-between
      .dropdown-reverse
         transition: .4s linear all
         transform: rotate(-180deg)
      .dropdown
         transition: .4s linear all
   .children
      align-items: flex-start
      display: flex
      width: inherit
      flex-direction: column
      margin: 16px 0px 0px 32px
      .child-category
         margin: 0px 0px 16px 0px
</style>
