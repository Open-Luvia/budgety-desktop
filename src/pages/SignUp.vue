<template>
    <div class="container fullscreen">
       <LoginCard type="signup">Registrati</LoginCard> 
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
.container {
    background-color: #232a33;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
