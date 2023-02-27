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
import type { MoviesProps, GenreProps } from '@/types/movies'

const apiKey = import.meta.env.VITE_PUBLIC_API_KEY_V3

const store = createStore({
  state: {
    user: null,
    moviesList: [] as MoviesProps[],
    genres: [] as GenreProps[],
    genreSelected: [] as number[],
    loadingData: true,
  },
  getters: {
    moviesList(state) {
      return state.moviesList
    },
    genres(state) {
      return state.genres
    },
    genreSelected(state) {
      return state.genreSelected
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
    setGenres(state, payload) {
      state.genres = payload
    },
    setGenreSelected(state, payload) {
      state.genreSelected = payload
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

      this.state.loadingData = true

      await api
        .get(`/movie/popular?${apiKey}${pageNumberUrl}`, {
          params: {
            with_genres:
              this.state.genreSelected.length > 0
                ? this.state.genreSelected.toString()
                : null,
          },
        })
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
    async getGenresMovies(context) {
      await api.get(`/genre/movie/list?${apiKey}`).then((res) => {
        context.commit('setGenres', res.data.genres)
      })
    },
  },
})

export default store
