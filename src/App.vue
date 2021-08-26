<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;

  a {
    text-decoration: none;
  }
}

#app {
  background-color: $color-background;
  min-height: 100vh;
  width: 100vw;
}
</style>
