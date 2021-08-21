<template>
    <div class="home">
      <div class="image">
        <img src="@/assets/hand_rock.png" alt="">
      </div>
      <h1>Hi! I'm Fernando</h1>
      <h5>A Full Stack Developer</h5>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;

  div {
    align-items: flex-end;
    height: 150px;
    width: 150px;
    border: 8px solid $color-primary;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    img {
      height: 90%;
      margin-bottom: -3px;
      width: auto;
    }
  }

  h1 {
    color: $color-primary;
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -2px;
    line-height: 5.2rem;
    margin-bottom: 12px;
  }

  h5 {
    color: $color-secondary;
    font-size: 1.6rem;
    font-weight: 400;
  }
}
</style>
