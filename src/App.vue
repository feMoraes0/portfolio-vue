<template>
  <router-view :key="$route.path" />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
* {
  user-select: none;
  box-sizing: border-box;
  color: $color-white;
  font-family: $font-default;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>
