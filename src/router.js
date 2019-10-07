import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import { routes } from './routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: routes.home,
      redirect: { name: 'login' }
    },
    {
      path: routes.login,
      name: 'login',
      component: Login
    },
    {
      path: routes.sign_up,
      name: 'register',
      component: Register
    }
  ]
})
