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
      },
      toggle_switch: {
         type: Boolean,
         default: false
      }
   }
}
</script>

<style lang="sass" scoped>
@import '@/assets/global.sass'
.header
      align-items: center;
      background-color: map-get($colors, 'primary')
      color: white
      display: grid
      font-size: 24px
      font-weight: 500
      grid-template-columns: 200px auto 200px
      height: 2.8em
      justify-items: center;
      line-height: 2.8em
      .exit
         grid-column: 1/2
         justify-self: start
         margin: 0px 0px 0px 10px
      .title
         grid-column: 2/3
</style>
