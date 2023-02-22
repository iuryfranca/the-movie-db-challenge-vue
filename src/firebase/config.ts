import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA1RS1xeBTeza-8ehNyvnZDqON9Wv6pYeM',
  authDomain: 'the-movie-db-challenge-vue.firebaseapp.com',
  projectId: 'the-movie-db-challenge-vue',
  storageBucket: 'the-movie-db-challenge-vue.appspot.com',
  messagingSenderId: '98701354614',
  appId: '1:98701354614:web:5d1496c1ab502d4ebb6157',
}

//init
initializeApp(firebaseConfig)

//init firebase auth
const auth = getAuth()

export { auth }
