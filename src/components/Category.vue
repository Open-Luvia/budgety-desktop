<template>
   <div>
      <div class="category">
         {{ this.category.name }}
         <div class="children" v-if="this.category.children.length != 0">
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
export default {
   props: {
      category: Object
   }
}
</script>

<style lang="sass" scoped>
.category
   align-items: flex-start
   display: flex
   flex-direction: column
   margin:
   padding: 0px
   .children
      align-items: flex-start
      display: flex
      flex-direction: column
      margin: 16px 0px 0px 32px
      .child-category
         margin: 0px 0px 16px 0px
</style>
