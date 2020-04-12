<template>
    <div class="container fullscreen">
       <LoginForm/> 
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
    components: {
        LoginForm
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
