<template>
  <main id="main-container" class="light-theme">
    <router-view :key="$route.path" />
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
* {}
</style>
