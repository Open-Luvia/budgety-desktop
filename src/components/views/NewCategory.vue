<template>
   <div class="new-category">
      <ModalHeader back_to="settingsCategories">
         Nuova categoria
      </ModalHeader>
   </div>
</template>

<script>
import ModalHeader from '@/components/ModalHeader.vue'
export default {
   components: {
      ModalHeader
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.new-category
   background: white;
   height: 100%
   width: 100%
</style>
