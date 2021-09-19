<template>
  <main>
    <section ref="initial" class="initial">
      <div class="background">
        <div class="content">
          <h1></h1>
          <h1><span>.</span></h1>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.addEventListener('scroll', this.initialScroll);
  },
  methods: {
    initialScroll() {
      const { scrollY } = window;
      const initialSection = this.$refs.initial;
      if (scrollY === 0 && initialSection.classList.contains('moveRight')) {
        initialSection.classList.remove('moveRight');
      } else if (scrollY > 0) {
        initialSection.classList.add('moveRight');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section.initial {
  padding: 30px;

  div.background {
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
      transition: width $base_duration ease-in;
      animation: reduceLeft $base_duration ease-in-out,
        show $base_duration ease-in-out;
    }

    div.content {
      display: flex;
      flex-direction: row;
      padding-right: 12px;
      transition: transform $base_duration ease-in;

      h1 {
        color: $color-black;
        font-family: $font-bold;
        font-weight: bolder;
        font-size: 13rem;
        line-height: 11rem;
        transition: transform $base_duration ease-in-out;
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
}

.moveRight {
  div::before {
    width: calc(100% - 60px) !important;
  }

  div.content {
    transform: translateX(calc(100% - 30px)) rotateZ(-90deg);

    span {
      color: $color-background !important;
    }
  }
}
</style>
