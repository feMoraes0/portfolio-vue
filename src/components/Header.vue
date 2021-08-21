<template>
  <header>
    <router-link to="/">Fernando</router-link>
    <div class="menu">
      <router-link to="about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 15px 15vw;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: $color-primary;
    font-weight: 400;
    letter-spacing: .5px;
  }

  .menu {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a:hover {
      color: $color-secondary;
    }
  }
}
</style>
