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
      <transition name="slide-fade" mode="out-in">
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
               <BaseIcon
                  height="18"
                  width="18"
                  style="transform: rotate(-90deg);"
                  color="#b5b5b5"
               >
                  <IconChervonCircleDown />
               </BaseIcon>
               <span>
                  {{ child.name }}
               </span>
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
   align-items: flex-start
   border-color: grey
   border-radius: 0px
   border-style: solid
   border-width: 0px 0px 1px 0px
   cursor: pointer
   display: flex
   flex-direction: column
   margin: 0px 10px 0px 10px
   padding: 10px
   width: calc(100% - 20px)
   .category-name
      align-items: center
      display: flex
      justify-content: space-between
      width: 100%
      .dropdown-reverse
         transform: rotate(-180deg)
         transition: .4s linear all
      .dropdown
         transition: .4s linear all
   .children.v-enter, .children.v-leave
      height: 0px
   .children
      overflow: hidden
      width: 100%
      .child-category
         align-items: center
         display: flex
         justify-content: flex-start
         padding: 5px 5px 0px 0px
         span
            margin: 0px 0px 0px 10px
</style>
