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
  color: $color-white;
  font-family: $font-default;
  margin: 0;
  padding: 0;
  text-decoration: none;

}

body {
  width: 100vw;
  height: 100vh;
  background-color: $color-background;
}

</style>
