<template>
  <header class="header">
    <p class="header__link">Fernando</p>
    <ul class="header__list">
      <li class="header__list__item">
        <a href="/" class="header__list__item__link">LinkedIn</a>
      </li>
      <li class="header__list__item">
        <a href="/" class="header__list__item__link">GitHub</a>
      </li>
      <li class="header__list__item">
        <a href="/" class="header__list__item__link">E-mail</a>
      </li>
    </ul>
    <p>Light/Dark</p>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 0;
  width: 100%;

  &__link {
    color: #333;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: none;
  }

  &__list {
    display: flex;
    flex-direction: row;
    list-style: none;

    &__item {
      margin-right: 4rem;

      &:last-child {
        margin-right: 0;
      }

      &__link {
        color: #333;
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
  }
}
</style>
