<template>
    <div @click="displayEvents" class="box"></div>
</template>

<script>
import AccountsService from '@/services/AccountsService.js'
export default {
    methods: {
        displayEvents() {
            AccountsService.getAccounts().then(response => {
                console.log(response.data)
            })
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