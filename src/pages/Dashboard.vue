<template>
    <div class="fullscreen">
        <Navbar class="nav" />
        <div class="body">
            <Sidebar />
            <h1>Dashboard</h1>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
    components: {
        Navbar,
        Sidebar
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