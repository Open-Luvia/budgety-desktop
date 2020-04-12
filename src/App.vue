<template>
    <div id="app">
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>
export default {
    name: 'app',
    created() {
        this.$store.dispatch('accounts/getAccounts');
    }
};
</script>

<style lang="sass">
@import '/assets/global.sass'
</style>
