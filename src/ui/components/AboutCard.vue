<template>
  <Card class="about-card">
    <h1 class="title-card">About me</h1>
    <p class="content-text">
      Full-stack developer coding with JavaScript and TypeScript languages and their
      frameworks and libraries like VueJS, ReactJS, React Native,
      NodeJS and others. Currently working at Vivo (Telefônica Brasil) in the B2B departmant,
      maintaining, improving and delivering high quality features for millions of users every day.
    </p>
  </Card>
</template>

<script>
import Card from '../elements/Card.vue';

export default {
  name: 'AboutCard',
  components: {
    Card,
  },

};
</script>

<style lang="scss" scoped>
.about-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-area: about-card;

  p {
    margin-top: 20px;
  }
}
</style>
