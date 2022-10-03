import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
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
  modules: {}
})
