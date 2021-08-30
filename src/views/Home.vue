<template>
  <main>
    <section>
      <img
        @click="avatarImageClick"
        src="@/assets/images/bighead-default.svg"
        alt="avatar"
      >
      <div class="content">
        <h2>Fernando Moraes</h2>
        <h3>Full Stack Developer</h3>
        <span>
          Coding with JavaScript
          and TypeScript languages and their frameworks and libraries like VueJS,
          ReactJS, React Native, NodeJS and others. Always trying to evolve and deliver
          the best experience for developers and users.
        </span>
        <div>
          <Button :on-click="contactClick">Contact</Button>
          <Button :on-click="projectClick">Project</Button>
        </div>
      </div>
    </section>
    <Contact :isVisible="contactIsVisible" @close="contactClick" />
  </main>
</template>

<script>
import Button from '@/components/Button.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Home',
  components: {
    Button,
    Contact,
  },
  data() {
    return {
      contactIsVisible: false,
    };
  },
  methods: {
    avatarImageClick() {
      console.log('avatar image click');
    },
    contactClick() {
      this.contactIsVisible = !this.contactIsVisible;
    },
    projectClick() {
      console.log('project click');
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 15%;
      margin-bottom: 30px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      width: 35%;

      h2 {
        font-size: 2.43rem;
        font-weight: 900;
        line-height: 2.875rem;
      }

      h3 {
        font-size: 1.15rem;
        font-weight: 400;
        margin-bottom: 30px;
      }

      span {
        width: 100%;
        font-size: 1.15rem;
        font-weight: 400;
        align-self: center;
        line-height: 1.5rem;
        margin-bottom: 30px;
        word-break: keep-all;
        text-align: center;
      }

      div {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;

        button {
          margin-left: 50px;

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
