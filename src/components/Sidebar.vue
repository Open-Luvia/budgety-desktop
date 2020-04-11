<template>
    <div @click="displayEvents" class="box"></div>
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
.box {
    height: 40px;
    width: 40px;
    background: blue;
}
</style>