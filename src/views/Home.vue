<template>
  <main>
    <section class="initial">
      <div>
        <h1></h1>
        <h1><span>.</span></h1>
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
section.initial {
  padding: 30px;

  div {
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      top: 30px;
      left: 30px;
      z-index: -1;
      background-color: $color-primary;
      width: calc(50% - 30px);
      height: calc(100% - 60px);
      transform-origin: left;
      animation: reduceLeft $base_duration ease-in-out,
        show $base_duration ease-in-out;
    }

    h1 {
      color: $color-black;
      font-family: $font-bold;
      font-weight: bolder;
      font-size: 13rem;
      line-height: 11rem;
      animation: slideDown $base_duration ease-in-out,
        show $base_duration ease-in-out;

      &:first-child:after {
        content: 'He';
      }

      &:first-child:hover::after {
        margin-right: 3px;
        content: 'Ha';
      }

      &:first-child {
        margin-left: 15px;
      }

      &:last-child::before {
        content: 'llo';
      }

      &:last-child:hover::before {
        margin-left: 13px;
        content: 'yy';
      }

      span {
        color: $color-primary;
      }
    }
  }
}
</style>
