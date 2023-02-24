import { createStore } from 'vuex'

//firebase imports
import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { api } from '@/lib/axios'
import type { MoviesProps } from '@/types/movies'

const store = createStore({
  state: {
    user: null,
    moviesList: [] as MoviesProps[],
    loadingData: true,
  },
  getters: {
    moviesList(state) {
      return state.moviesList
    },
    loadingData(state) {
      return state.loadingData
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setMoviesList(state, payload) {
      state.moviesList = payload
    },
  },
  actions: {
    async signup(context, { email, password, displayName }) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          if (res) {
            context.commit('setUser', res.user)
            updateProfile(res.user, {
              displayName: displayName,
            })
          } else {
            throw new Error('Algo deu errado na hora de criar sua conta :(')
          }
        }
      )
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Algo deu errado na hora de realizar o login :(')
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
    },
    async getListMovies(context, { typeGet, numberPageApi }) {
      const pageNumberUrl = `&page=${numberPageApi}`
      const apiKey = import.meta.env.VITE_PUBLIC_API_KEY_V3

      this.state.loadingData = true

      await api
        .get(`/movie/popular?${apiKey}${pageNumberUrl}`)
        .then((res) => {
          context.commit(
            'setMoviesList',
            typeGet === 'discover'
              ? [...res.data.results]
              : [...this.state.moviesList, ...res.data.results]
          )
        })
        .catch(() => new Error('Failed to fetch data'))

      this.state.loadingData = false
    },
  },
})

export default store
