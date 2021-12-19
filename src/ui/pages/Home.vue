<template>
  <main class="page">
    <Resume :user="user" />
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
  data() {
    return {
      user: {
        name: 'Fernando Moraes',
        profession: 'Full-Stack Developer',
        location: 'São Paulo',
      },
    };
  },
};
</script>
