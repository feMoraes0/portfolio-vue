<template>
  <main class="page">
    <Resume />
    <div class="section-divider" />
  </main>
</template>

<script>
import Resume from '../sections/Resume.vue';

export default {
  name: 'Home',
  components: {
    Resume,
  },
};
</script>
