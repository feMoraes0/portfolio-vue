<template>
  <main v-if="!!user" class="page">
    <Resume :user="user" />
    <div class="section-divider" />
  </main>
</template>

<script>
import githubApi from '@/services/github-api';
import Resume from '../sections/Resume.vue';

export default {
  name: 'Home',
  components: {
    Resume,
  },
  data() {
    return {
      user: undefined,
    };
  },
  async mounted() {
    this.user = await githubApi.getUser();
  },
};
</script>
