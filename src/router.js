import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import { routes } from './routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: routes.HOME,
      redirect: { name: 'login' }
    },
    {
      path: routes.LOGIN,
      name: 'login',
      component: Login
    },
    {
      path: routes.SIGN_UP,
      name: 'register',
      component: Register
    }
  ]
})
