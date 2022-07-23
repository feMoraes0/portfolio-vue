<template>
  <main class="home-page">
    <section class="card">
      <span class="card__label">
        2022
      </span>
      <h1>Fernando</h1>
      <div class="card__about">
        <h3>About</h3>
        <h4>
          Full Stack Developer with more than two years of professional
          experience working with JavaScript and TypeScript in Frontend
          and Backend projects. Involved in techinical validation, implementation
          and testing of application demands that are delivered daily for over 10.000 people.
        </h4>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: 5vh 5vw;
}
.card {
  width: 90vw;
  height: 90vh;
  background-color: #DCD7C9;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222831;

  &__label {
    font-size: 1.6rem;
    background-color: #F05454;
    padding: 1rem 3rem;
    border-radius: 1rem;
  }

  h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 18rem;
    line-height: 20rem;
    font-weight: 600;
    text-align: center;
    margin: 7rem auto;
  }

  &__about {
    width: 45%;
    display: flex;
    flex-direction: row;

    h3 {
      flex: 1;
      font-size: 2.2rem;
      font-weight: 400;
      font-family: 'Roboto Slab', serif;
    }

    h4 {
      flex: 3;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2rem;
    }
  }
}
</style>
