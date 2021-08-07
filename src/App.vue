<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-brand" to="/">2021</router-link>
      <div class="nav-items">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap');

* {
  box-sizing: border-box;
  color: #e9e9ea;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;

  a {
    font-size: 1rem;
    text-decoration: none;
  }
}

body {
  background: #292830;
  background: radial-gradient(circle, #292830 5%, #0c0c0e 100%);
  overflow: hidden;
  height: 100vh;
}

#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .nav-brand {
    font-size: 1.1rem;
    font-weight: 900;
    letter-spacing: 3px;
  }

  #nav {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2.5vh 10vw;
    width: 100vw;

    .nav-items {
      a {
        margin-left: 2vw;

        &:first {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
