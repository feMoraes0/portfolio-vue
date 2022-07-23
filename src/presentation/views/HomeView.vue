<template>
  <main class="home-page">
    <CardComponent class="home-page__card">
      <LabelComponent :text="2022" />
      <h1>Fernando</h1>
      <div class="home-page__card__about">
        <h3>About</h3>
        <h4>
          Full Stack Developer with more than two years of professional
          experience working with JavaScript and TypeScript in Frontend
          and Backend projects. Involved in techinical validation, implementation
          and testing of application demands that are delivered daily for over 10.000 people.
        </h4>
      </div>
    </CardComponent>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from '@/presentation/components/CardComponent.vue';
import LabelComponent from '@/presentation/components/LabelComponent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    CardComponent,
    LabelComponent,
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: 5vh 5vw;

  &__card {
    align-items: center;
    background-color: #DCD7C9;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-family: 'Roboto Slab', serif;
      font-size: 18rem;
      font-weight: 600;
      line-height: 20rem;
      margin: 7rem auto;
      text-align: center;
    }

    &__about {
      display: flex;
      flex-direction: row;
      width: 45%;

      h3 {
        flex: 1;
        font-family: 'Roboto Slab', serif;
        font-size: 2.2rem;
        font-weight: 400;
      }

      h4 {
        flex: 3;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2rem;
      }
    }
  }
}
</style>
