<template>
   <nav>
      <div class="hamburger" @click="toggleNavbar">
         <font-awesome-icon :icon="icon" />
      </div>
      <div class="desktop-navbar" ref="desktop-navbar">
         <ul class="nav-links">
            <li>
               <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </li>
            <li>
               <router-link :to="{ name: 'accounts' }">Conti</router-link>
            </li>
            <li>Report</li>
            <li>Budget</li>
         </ul>
         <ul class="settings">
            <router-link :to="{ name: 'settings' }">
               <font-awesome-icon icon="sliders-h" />
            </router-link>
         </ul>
      </div>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         icon: 'bars'
      }
   },
   methods: {
      toggleNavbar() {
         const nav = this.$refs['desktop-navbar'].classList
         if (nav.contains('open')) {
            //chiusura
            clearTimeout()
            nav.remove('open')
            this.icon = 'bars'
            setTimeout(() => {
               nav.add('closed') //add the display: none to remove the expanded navbar
            }, 400)
         } else {
            //apertura
            clearTimeout()
            this.icon = 'times'
            nav.remove('closed')
            setTimeout(() => {
               nav.add('open')
            }, 100)
         }
      }
   }
}
</script>

<style lang="sass" scoped>

@import '../assets/global.sass'

nav
    position: relative
    z-index: 999
    background: map-get($colors, 'navbar')
    box-sizing: border-box
    color: white
    font-size: 24px
    font-weight: 700
    height: $navbar-height
    list-style: none
    padding: 0px 0px
    text-decoration: none
    width: 100vw
    .hamburger
        display: none
    .desktop-navbar
        display: flex
        height: 100%
        justify-content: space-between
        padding: 0px 16px
        color: inherit
        .settings
            align-items: center
            display: flex
            height: 100%
            justify-content: flex-end
            list-style: none
            margin: 0px
            padding: 0px 16px
            text-decoration: none
        .nav-links
            color: inherit
            align-items: center
            display: flex
            height: 100%
            justify-content: flex-start
            list-style: none
            margin: 0px
            padding: 0px 0px
            text-decoration: none
            li
                padding: 0px 16px

@media (max-width: 600px)
    nav
        .hamburger
            align-items: center
            cursor: pointer
            display: flex
            height: 100%
            justify-content: flex-end
            padding: 0px 24px
        .desktop-navbar
            background: inherit
            display: flex
            flex-direction: column
            height: 0px
            transition: height 0.4s linear
            //mantain the structure of the navigation element
            .nav-links
                flex-direction: column
                li
                    padding: 32px 0px
            .settings
                flex-direction: column
                padding: 32px 0px
        .closed
            //remove navigation elements from the DOM after the animation
            display: none
        .open
            background: map-get($colors, 'navbar')
            display: flex
            flex-direction: column
            height: calc(100vh - #{$navbar-height})
            transition: height 0.4s linear
            .nav-links
                flex-direction: column
                li
                    padding: 32px 0px
            .settings
                flex-direction: column
                padding: 32px 0px
</style>
