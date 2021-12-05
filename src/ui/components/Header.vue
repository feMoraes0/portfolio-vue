<template>
  <header class="container">
    <ul class="menu-box">
      <li>About</li>
      <li>Projects</li>
      <li>Experience</li>
      <li>Contact</li>
    </ul>
    <div class="logo-box">
      <Logo class="logo" />
      <span>Fernando</span>
      <span>Moraes</span>
    </div>
    <ul class="social-box">
      <li>
        <Linkedin class="social-icon" />
      </li>
      <li>
        <Github class="social-icon" />
      </li>
      <li>
        <Email class="social-icon" />
      </li>
    </ul>
  </header>
</template>

<script>
import Email from '@/assets/icons/email.svg';
import Github from '@/assets/icons/github.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Logo from '@/assets/icons/logo-f.svg';

export default {
  name: 'Header',
  components: {
    Email,
    Github,
    Linkedin,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 0;

  ul {
    display: flex;
    flex-direction: row;
    flex: 2;
    justify-content:flex-start;
    list-style: none;

    &.menu-box {
      li {
        margin-right: 3.5rem;
      }
    }

    &.social-box {
      justify-content: flex-end;
      padding: 0px 3rem;

      .social-icon {
        margin-left: 5rem;
        width: 3.5rem;
      }
    }

    li {
      cursor: pointer;
      font-size: 1.7rem;
    }
  }

  .logo-box {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;

    .logo {
      height: 5.5rem;
      margin-bottom: .5rem;
      width: 5.5rem;
    }

    span {
      font-size: 1.6rem;
    }
  }
}
</style>
