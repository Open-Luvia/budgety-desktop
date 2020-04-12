<template>
   <div>
      <Navbar />
      <BaseButton buttonClass="secondary" @click="logout">Logout</BaseButton>
   </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
   export default {
      components: {
         Navbar
      },
      methods: {
         logout(){
            console.log("User logged out")
         }
      }
   }
</script>

<style lang="sass" scoped>

</style>