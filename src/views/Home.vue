<template>
  <main>
    <section>
      <h1></h1>
      <h1><span>.</span></h1>
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
  height: 100vh;
  padding: 30px;

  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      position: fixed;
      top: 30px;
      left: 30px;
      z-index: -1;
      background-color: $color-primary;
      width: calc(50% - 30px);
      height: calc(100% - 60px);
      animation: move 1.5s ease;
      transform-origin: left;
    }

    h1 {
      color: $color-black;
      font-family: $font-bold;
      font-weight: bolder;
      font-size: 13rem;
      line-height: 11rem;

      &:before {
        transition: content 1s ease;
      }

      &:first-child:after {
        content: 'He';
      }

      &:first-child:hover:after {
        margin-right: 3px;
        content: 'Ha';
      }

      &:first-child {
        margin-left: 15px;
      }

      &:last-child:before {
        content: 'llo';
      }

      &:last-child:hover:before {
        margin-left: 14px;
        content: 'yy';
      }

      span {
        color: $color-primary;
      }
    }
  }

  @keyframes move {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 1;
      transform: scaleX(1)
    }
  }
}
</style>
