import { createStore } from 'vuex'
import * as user from './modules/user'
import * as player from './modules/player'

const store = createStore({
  modules: {
    user,
    player
  }
})

export default store
