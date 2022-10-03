import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import cart from './modules/cart.js'
import category from './modules/category.js'
import user from './modules/user.js'

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
  modules: {
    cart,
    category,
    user
  },
  // 配置vuex插件
  plugins: [
    // 默认存储在localStorage
    createPersistedstate({
      // 本地存储名字
      key: 'xtxpc',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
