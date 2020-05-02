<template>
   <div class="category">
      <div class="category-name" @click.self="showSubCategories">
         <div v-if="show_edit">
            <BaseInput v-model="category.name" :placeholder="category.name" />
         </div>
         <span v-else>
            {{ this.category.name }}
         </span>
         <div class="edit-options">
            <font-awesome-icon icon="edit" v-if="show_edit" />
            <font-awesome-icon icon="trash" v-if="show_edit" />
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
      </div>
      <transition name="height-expansion" mode="out-in">
         <div
            class="children"
            :style="{ height: this.children_height + 'px' }"
            v-if="
               this.show_sub_categories && this.category.children.length != 0
            "
         >
            <div
               class="child-category"
               v-for="child in category.children"
               :key="child.id"
            >
               <div class="child-name">
                  <BaseIcon
                     height="18"
                     width="18"
                     style="transform: rotate(-90deg);"
                     color="#b5b5b5"
                  >
                     <IconChervonCircleDown />
                  </BaseIcon>
                  <div v-if="show_edit" style="height: 38px;">
                     <BaseInput
                        v-model="child.name"
                        :placeholder="child.name"
                     />
                  </div>
                  <span v-else>
                     {{ child.name }}
                  </span>
               </div>
               <div class="edit-options">
                  <font-awesome-icon
                     icon="trash"
                     v-if="show_edit"
                     color="#FF5B57"
                  />
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
      category: Object,
      show_edit: Boolean
   },
   data() {
      return {
         show_sub_categories: true,
         children_height: parseInt(this.category.children.length) * (38 + 5)
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
      .edit-options
         display: flex
         align-items: center
         .dropdown-reverse
            transform: rotate(-180deg)
            transition: .4s linear all
         .dropdown
            transition: .4s linear all
   .children
      width: 100%
      overflow: hidden
      .child-category
         align-items: center
         display: flex
         justify-content: space-between
         padding: 5px 5px 0px 0px
         .child-name
            display: flex
            align-items: center
            justify-content: flex-start
            span
               margin: 0px 0px 0px 10px
         .edit-options
            display: flex
            align-items: center
</style>
