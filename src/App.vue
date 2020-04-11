<template>
    <div id="app">
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>
export default {
    name: 'app',
    created() {
        this.$store.dispatch('accounts/getAccounts')
    }
}
</script>

<style lang="sass">
@import '/assets/global.sass'

#app
    -moz-osx-font-smoothing: grayscale
    -webkit-font-smoothing: antialiased
    color: #2c3e50
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    height: 100vh
    min-height: 100vh
    text-align: center
    a
        color: inherit
        text-decoration: none
.fullscreen
    height: 100%
    margin: 0px
    min-height: 100%
    min-width: 100%
    padding: 0px
    width: 100%
.sidebar
    background: map-get($colors, 'sidebar')
    height: 100%
    width: $sidebar-width
    .sidebar-elements
        display: flex
        flex-direction: column
        height: 100%
        justify-content: space-between
        .sidebar-element
            align-items: center
            color: white
            cursor: pointer
            display: flex
            flex-direction: column
            font-size: 21px
            font-weight: 500
            height: 3em
            justify-content: center
            width: 100%
</style>
