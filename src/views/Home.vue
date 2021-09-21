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
    <section class="request-access">
      <div>
        <h1>Precisa de acesso a minha informação. Solicite acesso via e-mail:</h1>
        <form action="/">
          <input type="email" placeholder="Digite seu e-mail">
        </form>
      </div>
      <div>
        <h1>Já tenho uma chave de acesso. Informe aqui para ter acesso aos dados:</h1>
        <form action="/">
          <input type="text" placeholder="Informe sua chave de acesso">
        </form>
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

section.request-access {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: $color-black;
      font-size: 1.8rem;
      width: 60%;
      text-align: center;
      margin-bottom: 30px;
    }

    form {
      width: 50%;

      input {
        padding: 20px;
        border: none;
        border-radius: 10px;
        width: 100%;
        color: $color-black;
        font-size: 1rem;
        font-family: $font-default;
      }
    }
  }

}
</style>
