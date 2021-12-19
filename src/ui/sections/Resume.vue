<template>
  <main class='resume'>
    <section class='introduction-box'>
      <h1>
        <span>{{user.name}}</span>
        <span>{{user.profession}}</span>
        <span>Based in {{user.location}}</span>
      </h1>
    </section>
    <section class='user-data-box'>
      <div class="user-data-info left">
        <div>
          <p class="info-title">
            Biography
          </p>
          <p class="info-content">
            JavaScript and TypeScript entusiast
            who is highly oriented to develop best experiences
          </p>
        </div>
        <div>
          <p class="info-title">
            Graduation
          </p>
          <p class="info-content list">
            <span>Computer Science</span>
            <span>2014 - 2018</span>
          </p>
        </div>
        <div>
          <p class="info-title">
            Nationalities
          </p>
          <p class="info-content list">
            <span>Brazilian</span>
            <span>Italian</span>
          </p>
        </div>
        <div>
          <p class="info-title">
            Services
          </p>
          <p class="info-content list">
            <span>Web Application</span>
            <span>Mobile Application</span>
            <span>API development</span>
          </p>
        </div>
      </div>
      <div class="user-data-image">
        <div class="user-data-image-box">
          <img src="@/assets/images/hand-rock.png" alt="hand rock">
        </div>
      </div>
      <div class="user-data-info right">
        <div>
          <p class="info-title">Years of  <br/>Experience</p>
          <p class="info-content big-text">1.5 +</p>
        </div>
        <div>
          <p class="info-title">Companies</p>
          <p class="info-content big-text">3</p>
        </div>
        <div>
          <p class="info-title">Repositories</p>
          <p class="info-content big-text">75</p>
        </div>
        <div>
          <p class="info-title">Stars</p>
          <p class="info-content big-text">228</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Resume',
  props: {
    user: {
      type: Object,
      required: true,
      validator(received) {
        const { name, profession, location } = received;
        return (!!name && !!profession && !!location);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.resume {
  .introduction-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10rem 0;

    h1 {
      font-size: 7rem;
      display: flex;
      flex-direction: column;
      text-align: center;

      span {
        line-height: 10rem;
        letter-spacing: .2rem;
        font-family: $font-serif;
      }
    }
  }

  .user-data-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    margin-top: 10rem;

    .user-data-image {
      display: flex;
      flex: 2;
      justify-content: center;
      align-items: center;
      position: relative;
      border: 1px solid #aaa;
      border-radius: 450px;

      &-box {
        border-radius: 350px;
        height: 85%;
        width: 85%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, .2);

        img {
          width: 50%;
          transform: translateY(3px);
        }
      }
    }

    .user-data-info {
      flex: 1;

      &.left {
        padding-right: 20rem;
      }

      &.right {
        padding-left: 20rem;
        text-align: right;

        div {
          margin-bottom: 9rem;
        }
      }

      div {
        margin-bottom: 5rem;

        &:last-child {
          margin-bottom: 0;
        }

        .info-title {
          font-size: 1.6rem;
          color: #aaa;
          text-transform: uppercase;
          margin-bottom: 3rem;
        }

        .info-content {
          font-family: $font-serif;
          font-size: 2rem;
          line-height: 2.8rem;

          &.list {
            align-items: flex-start;
            display: flex;
            flex-direction: column;

            span {
              font-family: $font-serif;
              margin-bottom: 1.5rem;
            }
          }
        }
      }

      .big-text {
        font-size: 5rem !important;
        line-height: 5.5rem !important;
      }
    }
  }
}
</style>
