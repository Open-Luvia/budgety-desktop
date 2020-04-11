<template>
    <div class="fullscreen">
        <Navbar />
        <div class="body">
            <div class="sidebar">
                <div v-for="account in this.$store.accounts" :key="account">{{ account }}</div>
            </div>
            <h1>Dashboard</h1>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';
.body {
    height: calc(100vh - #{$navbarHeight});
    display: flex;
}
</style>