<template>
    <div class="container fullscreen">
       <LoginCard/> 
    </div>
</template>

<script>
import LoginCard from '@/components/LoginCard.vue'

export default {
    components: {
        LoginCard
    }
}
</script>

<style lang="sass" scoped>

@import '../assets/global.sass'
.container 
    align-items: center
    background-color: map-get($colors, "background")
    display: flex
    justify-content: center

</style>
