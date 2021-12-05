<template>
  <main id="main-container">
    <Header />
    <router-view :key="$route.path" />
  </main>
</template>

<script>
import Header from '@/ui/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#main-container {
  width: 100%;
}
</style>
