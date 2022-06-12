<template>
  <div class="home-view">
    <section class="home-view__introduction">
      <h3>
        Hi! I am {{ user.name }}, a {{ user.position }} at {{ user.company }} based
        in {{ user.city }}.
      </h3>
    </section>
    <section class="home-view__projects">
      <article v-for="project in projects" :key="project.id" class="home-view__projects__article">
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
  user: User = {
    name: '',
    city: '',
    position: '',
    company: '',
  };

  projects: Array<Project> = [];

  async mounted() {
    const userResponse = await fetch('https://api.github.com/users/femoraes0');
    const jsonUserResponse = await userResponse.json();
    this.user.name = jsonUserResponse.name;
    this.user.city = jsonUserResponse.location;
    this.user.company = jsonUserResponse.company;
    this.user.position = jsonUserResponse.bio;

    const projectsResponse = await fetch('https://api.github.com/users/feMoraes0/repos');
    const jsonProjectsResponse = await projectsResponse.json();
    jsonProjectsResponse.forEach((project: Project) => {
      console.log(project);
      this.projects.push(project);
    });
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
