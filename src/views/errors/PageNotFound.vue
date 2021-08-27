<template>
  <main>
    <img src="@/assets/images/bighead-lost.svg" alt="image">
    <h3>
      Probably you are lost and thirsty, click
      <router-link to='/'>here</router-link>
      to return to a safe place.
    </h3>
  </main>
</template>

<script>

export default {
  name: 'PageNotFound',
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  img {
    width: 15%;
    margin-bottom: 50px;
  }
}
</style>
