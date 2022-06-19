<template>
  <div class="home-view">
    <section class="home-view__introduction">
      <h3 v-if="user">
        Hi! I am {{ user.name }}, a {{ user.position }} at {{ user.company }} based
        in {{ user.city }}.
      </h3>
    </section>
    <section class="home-view__projects">
      <article v-for="project in projects" :key="project.id" class="home-view__projects__article">
        <img
          class="home-view__projects__article__background"
          :src="require(`@/assets/images/${getImageByLanguage(project.language)}`)"
          alt="background"
        />
      </article>
    </section>
    <footer class="home-view__footer">
      <p>Developed in 2022</p>
    </footer>
  </div>
</template>

<script lang="ts">
import FetchGetUserGateway from '@/gateways/fetch/fetch-get-user-gateway';
import GetUserUsecase from '@/usecases/get-user-usecase';
import { Vue } from 'vue-class-component';

interface User {
  name: string,
  city: string,
  position: string,
  company: string,
}

interface Project {
  id: number,
  name: number,
  language: string,
  url: string,
  description: string,
}

export default class HomeView extends Vue {
  user?: User;
  projects: Array<Project> = [];

  async mounted() {
    const getUserGateway = new FetchGetUserGateway();
    const getUserUsecase = new GetUserUsecase(getUserGateway, 'feMoraes0');
    this.user = await getUserUsecase.execute();
    const projectsResponse = await fetch('https://api.github.com/users/feMoraes0/repos?sort=updated');
    const jsonProjectsResponse = await projectsResponse.json();
    jsonProjectsResponse.forEach((project: Project) => {
      this.projects.push(project);
    });
  }

  getImageByLanguage(language: string) {
    const images = {
      vue: 'vuejs-card.png',
      javascript: 'javascript-card.png',
      typescript: 'typescript-card.png',
      dart: 'dart-card.png',
      swift: 'swift-card.png',
      css: 'css-card.png',
      scss: 'scss-card.png',
      html: 'html-card.png',
    } as any;

    const languageLowerCase = language?.toLowerCase();

    return images[languageLowerCase] || 'github-card.png';
  }
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
    grid-gap: 2px;
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
