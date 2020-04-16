<template>
   <div class="fullscreen">
      <Navbar />
      <div class="body">
         <aside class="sidebar">
            <div class="sidebar-elements">
               <div class="sidebar-element">
                  <router-link :to="{ name: 'SettingsCategories' }">
                     Categorie
                  </router-link>
               </div>
               <BaseButton buttonClass="secondary" @click="logout"
                  >Logout</BaseButton
               >
            </div>
         </aside>
         <router-view></router-view>
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
      width: 272px
      border-right: 1px solid black
      .sidebar-element
         color: black
</style>
