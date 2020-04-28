<template>
   <div class="fullscreen">
      <Navbar />
      <div class="body">
         <aside class="sidebar">
            <div class="sidebar-elements">
               <div class="sidebar-element">
                  <router-link :to="{ name: 'settingsCategories' }">
                     Categorie
                  </router-link>
               </div>
               <BaseButton button_class="secondary" @click="logout"
                  >Logout</BaseButton
               >
            </div>
         </aside>
         <div class="setting">
            <router-view></router-view>
         </div>
      </div>
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

<style lang="sass" scoped>
@import '@/assets/global.sass'
.body
   display: flex
   .sidebar
      background-color: white
      border-right: 1px solid black
      width: $sidebar-width
      .sidebar-element
         color: black
   .setting
      width: calc(100vw - #{$sidebar-width})
</style>
