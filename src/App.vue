<template>
  <div id="app">
    <router-view/>
    <div>
      <van-tabbar route v-model="active">
        <van-tabbar-item replace to="/" icon="home-o"></van-tabbar-item>
        <van-tabbar-item replace to="/discover" icon="search" dot></van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="manager" info="20"></van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: 0
    };
  },

  methods: {
    onClickLeft() {
      this.$toast("返回");
    },
    onClickRight() {
      this.$toast("按钮");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .van-icon {
    cursor: pointer;
  }
  .nav-bar {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    height: 46px;
    line-height: 46px;
    background-color: #fff;
    border-bottom: 1px solid rgb(248, 216, 246);
    .nav-bar-text {
      margin: 0px 10px;
      float: left;
    }
    .van-icon {
      position: relative;
      // top:8px;
      right: -80px;
      margin-top: 12px;
      padding-left: 25px;
    }
  }
}
</style>
