<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  min-height: 100vh;
}
.fullscreen {
    height: 100%;
    min-height: 100%;
    width: 100%;
    min-width: 100%;
    padding: 0px;
    margin: 0px;
}
</style>
