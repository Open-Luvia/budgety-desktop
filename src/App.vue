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
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
  min-height: 100vh;
  text-align: center;
}
.fullscreen {
    height: 100%;
    margin: 0px;
    min-height: 100%;
    min-width: 100%;
    padding: 0px;
    width: 100%;
}
</style>
