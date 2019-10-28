import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from './services/books'
import { isAuth } from './config/api'
import { removeToken, setToken } from './services/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    loggingStatus: false
  },
  mutations: {
    SET_BOOKS (state, books) {
      state.books = books
    },
    SET_LOGGING_STATUS (state, loggingStatus) {
      state.loggingStatus = loggingStatus
    }
  },
  actions: {
    findBooks (context) {
      getBooks()
        .then(res => context.commit('SET_BOOKS', res.data))
        .catch(err => console.log(err))
    },
    verifiedlogging (context) {
      if (isAuth()) context.commit('SET_LOGGING_STATUS', true)
      else context.commit('SET_LOGGING_STATUS', false)
    },
    loggout (context) {
      removeToken()
      context.commit('SET_LOGGING_STATUS', false)
    },
    logging (context, data) {
      if (data.access_token) {
        setToken(data.access_token)
        context.commit('SET_LOGGING_STATUS', true)
        this.dispatch('findBooks')
      }
    }
  },
  getters: {
    books: state => state.books,
    loggingStatus: state => state.loggingStatus
  }
})
