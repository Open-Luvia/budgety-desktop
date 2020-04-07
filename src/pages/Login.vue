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

<style lang="scss" scoped>
@import '../assets/global.scss';

.container {
    align-items: center;
    background-color: map-get($colors, "background");
    display: flex;
    justify-content: center;
}
</style>
