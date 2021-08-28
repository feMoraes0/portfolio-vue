<template>
  <main>
    <section>
      <img src="@/assets/images/bighead-default.svg" alt="person ">
      <div class="content">
        <h2>Fernando Moraes</h2>
        <h3>Full Stack Developer</h3>
        <div>
          Coding with JavaScript
          and TypeScript languages and their frameworks and libraries like VueJS,
          ReactJS, React Native, NodeJS and others. Always trying to evolve and deliver
          the best experience for developers and users.
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 20%;
    }

    .content {
      width: 35%;
      h2 {
        font-size: 2.43rem;
        font-weight: 900;
        line-height: 2.875rem;
      }

      h3 {
        font-size: 1.15rem;
        font-weight: 400;
        margin-bottom: 30px;
      }

      div {
        width: 93%;
        font-size: 1.15rem;
        font-weight: 400;
        align-self: center;
        line-height: 1.5rem;
        word-break: keep-all;
      }
    }
  }
}
</style>
