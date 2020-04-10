<template>
    <div class="fullscreen">
        <Navbar />
        <h1>Dashboard</h1>
        <Sidebar />
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
</style>