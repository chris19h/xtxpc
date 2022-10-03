import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
// A 模块
const moduleA = {
  // 默认的模块，`state` 区分模块，其他 `getters` `mutations` `actions` 都在全局。
  state: {
    username: 'moduleA'
  },
  getters: {
    newName(state) {
      return state.username + 'A !!!'
    }
  }
}
// B 模块
const moduleB = {
  // 带命名空间 `namespaced: true` 的模块，所有功能区分模块，更高封装度和复用。
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName(state) {
      return state.username + 'BBBBBBB'
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
  }
}

export default createStore({
  // 数据
  state: {},
  // vuex的计算属性
  getters: {},
  // 改数据函数
  mutations: {},
  // 请求数据函数
  actions: {},
  // 分模块
  modules: {
    moduleA,
    moduleB
  }
})
