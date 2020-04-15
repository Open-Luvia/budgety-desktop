<template>
   <div class="background">
      <div class="form">
         <div class="header">
            Nuova Transazione
         </div>
         <div class="body">
            <div class="description">
            <BaseInput placeholder="Descrizione"/>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.background
   width: calc(100vw - #{$sidebar-width})
   height: calc(100vh - #{$navbar-height})
   display: flex
   align-items: center
   justify-content: center
   background: rgba(0,0,0,0.2);
   position: absolute
   .form
      height: 400px
      width: 400px
      background: white
      border-radius: 20px
      .header
         background-color: map-get($colors, 'primary')
         border-radius: 20px 20px 0px 0px
         color: white
         font-size: 24px
         font-weight: 500
         height: 2.5em
         line-height: 2.5em
      .body
         .description
            margin: 10px 10px 10px 10px
</style>