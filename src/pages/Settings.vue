<template>
   <div class="fullscreen">
      <Navbar />
      <div class="body">
         <aside class="sidebar">
            <div class="sidebar-elements">
               <div
                  :class="{
                     'sidebar-element': true,
                     'sidebar-element selected': isActive('settingsCategories')
                  }"
               >
                  <router-link :to="{ name: 'settingsCategories' }">
                     Categories
                  </router-link>
               </div>
               <BaseButton button_class="secondary" @click="logout">
                  Logout
               </BaseButton>
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
      ...mapActions(['logout']),
      isActive(route_name) {
         return this.$router.currentRoute.name == route_name
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.body
   display: flex
   .sidebar
      background-color: map-get($colors, 'sidebar')
      border-right: 0px solid black
      width: $sidebar-width
      .sidebar-element
         color: white
         font-size: 24px
         font-weight: 600
      .selected
         color: black !important
         background-color: white !important
   .setting
      width: calc(100vw - #{$sidebar-width})
</style>
