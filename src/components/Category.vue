<template>
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
         v-if="this.show_sub_categories && this.category.children.length != 0"
      >
         <div
            class="child-category"
            v-for="child in category.children"
            :key="child.id"
         >
            <BaseIcon height="18" width="18" style="transform: rotate(-90deg);">
               <IconChervonCircleDown />
            </BaseIcon>
            <span>
               {{ child.name }}
            </span>
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
.category
   width: calc(100% - 20px)
   border-width: 0px 0px 1px 0px
   border-radius: 0px
   border-color: grey
   border-style: solid
   align-items: flex-start
   display: flex
   flex-direction: column
   cursor: pointer
   padding: 10px
   margin: 0px 10px 0px 10px
   .category-name
      width: 100%
      display: flex
      align-items: center
      justify-content: space-between
      .dropdown-reverse
         transition: .4s linear all
         transform: rotate(-180deg)
      .dropdown
         transition: .4s linear all
   .children
      width: 100%
      .child-category
         display: flex
         align-items: center
         justify-content: flex-start
         padding: 5px 5px 0px 0px
         span
            margin: 0px 0px 0px 10px
</style>
