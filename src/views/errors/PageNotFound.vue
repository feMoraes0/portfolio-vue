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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 15%;
    margin-bottom: 50px;
    animation: show $base_duration;
  }

  h3 {
    line-height: 150%;
    text-align: center;
    width: 20%;
    font-weight: 300;
    color: $color-black;
    animation: show $base_duration;

    a {
      color: $color-primary;
    }
  }
}
</style>
