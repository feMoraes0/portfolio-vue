<template>
  <div class="home-view">
    <section class="home-view__introduction">
      <h3>
        Hi! I am Fernando, a full-stack developer at Vivo (Telefônica Brasil) based
        in São Paulo
      </h3>
    </section>
    <section class="home-view__projects">
      <article v-for="project in projects" :key="project" class="home-view__projects__article">
        <img  class="home-view__projects__article__background" src="https://via.placeholder.com/200" alt="background">
      </article>
    </section>
    <footer class="home-view__footer">
      <p>developed in 2022</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HomeView extends Vue {
  projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
}
</script>

<style lang="scss" scoped>
.home-view {
  margin-top: 10rem;

  &__introduction {
    color: #222;
    font-size: 2.9rem;
    text-align: left;
    width: 80%;
  }

  &__projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 10rem 0;

    &__article {
      height: 15vw;
      width: 15vw;

      &__background {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
  }
}
</style>
