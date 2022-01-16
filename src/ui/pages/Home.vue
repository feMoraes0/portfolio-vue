<template>
  <main class="page">
    <Loading v-if="!user" />
    <span v-else>
      <Resume :user="user" />
      <div class="section-divider" />
    </span>
  </main>
</template>

<script>
import githubApi from '@/services/github-api';
import Resume from '../sections/Resume.vue';
import Loading from '../components/Loading.vue';

export default {
  name: 'Home',
  components: {
    Resume,
    Loading,
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
