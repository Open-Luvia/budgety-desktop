<template>
   <div>
      <Navbar />
      <BaseToggleSwitch :default_option="0" />
      <BaseToggleSwitch :default_option="0" :inverted_colors="true" />
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
</style>
