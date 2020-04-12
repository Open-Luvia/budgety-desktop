<template>
   <div>
      <Navbar />
      <BaseButton buttonClass="secondary" @click="logout">Logout</BaseButton>
   </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapActions } from 'vuex'
export default {
   components: {
      Navbar
   },
   methods: {
      ...mapActions(['logout'])
   }
}
</script>

<style lang="sass" scoped></style>
