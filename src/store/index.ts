import { createStore } from 'vuex'

//firebase imports
import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('Usuário atualizado:', state.user)
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log('signup atualizado')

      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Algo deu errado na hora de criar sua conta :(')
      }
    },
    async login(context, { email, password }) {
      console.log('Login realizado')

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Algo deu errado na hora de ralizar o login :(')
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
    },
  },
})

export default store
