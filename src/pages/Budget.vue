<template>
   <div class="budget-container">
      <Navbar />
   </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
   components: {
      Navbar
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'

.budget-container
   background: #fafafa
   min-height: 100vh
</style>
