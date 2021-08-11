<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  background-color: #f8fafd;
  min-height: 100vh;
  width: 100vw;
}
</style>
