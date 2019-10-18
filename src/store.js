import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from './services/books'
import { getToken } from './services/localStorage'

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
    logging (context) {
      if (getToken()) context.commit('SET_LOGGING_STATUS', true)
      else context.commit('SET_LOGGING_STATUS', false)
    }
  },
  getters: {
    books: state => state.books,
    loggingStatus: state => state.loggingStatus
  }
})
