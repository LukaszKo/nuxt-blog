import Cookie from 'js-cookie'

const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`
const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY}`

export const state = () => ({
  user: null,
  token: null
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setToken (state, payload) {
    state.token = payload
  },
  clearToken (state) {
    state.token = null
  },
  clearUser (state) {
    state.user = null
  }
}

export const getters = {
  isAuthenticated: state => state.token != null
}

export const actions = {
  async authorizeUser ({ commit }, payload) {
    const url = payload.isLogin ? SIGN_UP_URL : SIGN_IN_URL
    const body = {
      ...payload,
      returnSecureToken: true
    }

    const { idToken, expiresIn } = await this.$axios.$post(url, body)
    commit('setToken', idToken)
    commit('setUser', payload.email)
    localStorage.setItem('token', idToken)
    const expirationDate = new Date().getTime() + Number.parseInt(expiresIn) * 1000
    localStorage.setItem('tokenExpiration', expirationDate)
    Cookie.set('jwt', idToken)
    Cookie.set('expirationDate', expirationDate)
  },
  logout ({ commit }) {
    commit('clearToken')
    commit('clearUser')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
  },
  initAuth ({ commit, dispatch }, req) {
    let token
    let expirationDate
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('expirationDate='))
        .split('=')[1]
    } else {
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
      if (new Date().getTime() > +expirationDate || !token) {
        dispatch('logout')
        return
      }
    }
    commit('setToken', token)
  }
}
