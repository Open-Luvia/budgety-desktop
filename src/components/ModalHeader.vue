<template>
   <div class="header">
      <div class="exit">
         <router-link :to="{ name: back_to }">
            <font-awesome-icon icon="chevron-left" />
         </router-link>
      </div>
      <div class="title">
         <slot></slot>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      back_to: {
         type: String,
         required: true
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.header
      background-color: map-get($colors, 'primary')
      color: white
      display: grid
      font-size: 24px
      font-weight: 500
      grid-template-columns: 50px auto 50px
      height: 2.5em
      line-height: 2.5em
      .title
         grid-column: 2/3
      .exit
         grid-column: 1/2
</style>
