<template>
    <div class="sidebar"></div>
</template>

<script>
export default {
    methods: {
        displayEvents() {
            this.$store.dispatch('accounts/getAccounts')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/global.scss';

.sidebar {
    height: 100%;
    width: $sidebarWidth;
    background: blue;
}
</style>