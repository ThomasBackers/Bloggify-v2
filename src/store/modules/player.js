/**
 * Array shuffler:
 * using the Fisher-Yates algorithm,
 * it returns the shuffled array
 * @param {array} array - any array
 * @returns {array} - the shuffled array
 */
const shuffleArr = array => {
  const arrayCopy = [...array]
  for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = arrayCopy[i]
      arrayCopy[i] = arrayCopy[j]
      arrayCopy[j] = temp
  }
  return arrayCopy
}
// ------------------------------------------------------

export const state = {
  player: {
    playlist: ['a'],
    currentPosition: ['a'].length - 1,
    randomMode: false
  }
}

export const getters = {
  getPlaylist(state) {
    const playlist = state.player.playlist
    const randomMode = state.player.randomMode
    if (!randomMode) return playlist
    return shuffleArr(playlist)
  },
  getSong(state) {
    const playlist = state.player.playlist
    const currentPosition = state.player.currentPosition
    return playlist[currentPosition]
  }
}

export const actions = {
  previous({ commit, state }) {
    const playlistLength = state.player.playlist.length
    let currentPosition = state.player.currentPosition
    currentPosition === 0 ? currentPosition = playlistLength - 1 : currentPosition -= 1
    commit('setCurrentPosition', currentPosition)
  },
  next({ commit, state }) {
    const playlistLength = state.player.playlist.length
    let currentPosition = state.player.currentPosition
    currentPosition === playlistLength - 1 ? currentPosition = 0 : currentPosition += 1
    commit('setCurrentPosition', currentPosition)
  },
  switchRandomMode({ commit, state }) {
    commit('setRandomMode', !state.player.randomMode)
  },
  add({ commit, state }, song) {
    const playlist = [...state.player.playlist]
    playlist.push(song)
    commit('setPlaylist', playlist)
  },
  remove({ commit, state }, song) {
    if (state.player.playlist.length > 1) {
      const playlist = state.player.playlist.filter(
        elt => { if (elt.id !== song.id) return elt }
      )
      commit('setPlaylist', playlist)
    }
    else return 'you cannot set an empty playlist'
  }
}

export const mutations = {
  setCurrentPosition(state, position) {
    state.player.currentPosition = position
  },
  setRandomMode(state, randomMode) {
    state.player.randomMode = randomMode
  },
  setPlaylist(state, playlist) {
    state.player.playlist = playlist
  }
}
