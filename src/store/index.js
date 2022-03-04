import { createStore } from 'vuex'
import * as user from './modules/user'

const store = createStore({
  modules: {
    user
  }
})

export default store
