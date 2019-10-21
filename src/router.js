import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import BookList from './views/BookList.vue'
import { routes } from './routes'
import { isAuth } from './config/api'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!isAuth()) {
    next()
    return
  }
  next(routes.BOOKS)
}

const ifAuthenticated = (to, from, next) => {
  if (isAuth()) {
    next()
    return
  }
  next(routes.LOGIN)
}

export default new Router({
  routes: [
    {
      path: routes.HOME,
      redirect: routes.LOGIN
    },
    {
      path: routes.LOGIN,
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: routes.SIGN_UP,
      name: 'register',
      component: Register,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: routes.BOOKS,
      name: 'books',
      component: BookList,
      beforeEnter: ifAuthenticated
    }
  ]
})
