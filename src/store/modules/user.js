import axiosClient from '../../axios'

export const state = {
  user: {
    data: {},
    token: sessionStorage.getItem('TOKEN')
  }
}

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const actions = {
  register({ commit }, user) {
    return axiosClient.post('/register', user).then(
      ({ data }) => {
        commit('setUser', data)
        return data
      }
    )
  },
  login({ commit }, user) {
    return axiosClient.post('/login', user).then(
      ({ data }) => {
        commit('setUser', data)
        return data
      }
    )
  },
  logout({ commit }) {
    return axiosClient.post('/logout').then(
      res => {
        commit('logout')
        return res
      }
    )
  }
}

export const mutations = {
  setUser(state, userData) {
    state.user.token = userData.token
    state.user.data = userData.user
    sessionStorage.setItem('TOKEN', userData.token)
  },
  logout(state) {
    state.user.token = null
    state.user.data = {}
    sessionStorage.removeItem('TOKEN')
  }
}
