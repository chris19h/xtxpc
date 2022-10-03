import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  // 数据
  state: {
    username: 'zs'
  },
  // vuex的计算属性
  getters: {
    newName(state) {
      return state.username + ' getters 计算属性'
    }
  },
  // 改数据函数
  mutations: {
    updateName(state) {
      state.username = 'ls'
    }
  },
  // 请求数据函数
  actions: {
    updateName(ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  // 分模块
  modules: {}
})
