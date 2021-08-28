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
* {
  box-sizing: border-box;
  color: $color-text;
  font-family: $font-default;
  margin: 0;
  padding: 0;
  text-decoration: none;

  a {
    color: $color-link;
  }
}

body {
  width: 100vw;
  min-height: 100vh;
  background-color: $color-background;
}

</style>
