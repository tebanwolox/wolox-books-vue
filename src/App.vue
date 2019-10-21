<template lang="pug">
  div(id="app")
    navBar(v-if="isLog")
    router-view
</template>

<script>
import navBar from './components/NavBar'
import { isAuth } from './config/api'

export default {
  components: {
    navBar
  },
  data: function () {
    return {
      isLog: ''
    }
  },
  mounted () {
    this.isLog = isAuth()
  },
  updated () {
    this.isLog = isAuth()
  }
}
</script>

<style lang="scss">
@import './scss/application.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
</style>
