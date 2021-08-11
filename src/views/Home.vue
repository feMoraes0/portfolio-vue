<template>
  <div class="home">
    <div class="image">
      <img src="@/assets/hand_rock.png" alt="">
    </div>
    <h1>Fernando M.</h1>
    <h5>Full Stack Developer</h5>
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
    border: 8px solid #1d2024;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    img {
      width: auto;
      height: 90%;
      margin-bottom: -3px;
    }
  }

  h1 {
    color: #1d2024;
    font-size: 5rem;
    line-height: 5.2rem;
    letter-spacing: -1px;
    margin-bottom: 12px;
  }

  h5 {
    font-size: 1.8rem;
    letter-spacing: -1px;
  }
}
</style>
