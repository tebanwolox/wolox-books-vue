import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import BookList from './views/BookList.vue'
import BookDetail from './views/BookDetail.vue'
import { routes } from './routes'
import { isAuth } from './config/api'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: routes.HOME,
      redirect: routes.LOGIN
    },
    {
      path: routes.LOGIN,
      name: 'login',
      component: Login,
      meta: { private: false }
    },
    {
      path: routes.SIGN_UP,
      name: 'register',
      component: Register,
      meta: { private: false }
    },
    {
      path: routes.BOOKS,
      component: BookList,
      name: 'books',
      meta: { private: true }
    },
    {
      path: routes.BOOK_DETAIL,
      name: 'bookDetail',
      component: BookDetail,
      meta: { private: true }
    }
  ]
})

router.beforeEach((to, _, next) => {
  const auth = isAuth()
  if ((to.meta.private && auth) || (!to.meta.private && !auth)) next()
  else if (auth) next(routes.BOOKS)
  else next(routes.LOGIN)
})

export default router
