<template>
    <div class="container fullscreen">
       <LoginCard type="signup" /> 
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
    background-color: map-get($colors, "background");
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
