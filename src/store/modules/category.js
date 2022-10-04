// 分类模块
import { topCategory } from '@/api/constants.js'
import { findAllCategory } from '@/api/category.js'

export default {
  namespaced: true,
  state() {
    return {
      // 分类信息集合，需要依赖topCategory重新设置，保证初始化就要数据，不至于白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 修改分类函数
  mutations: {
    // 第一个参数就是state状态，第二个参数是在通过commit触发mutation函数时传递的载荷（payLoad）
    setList(state, payload) {
      // payload 所有的分类集合
      state.list = payload
    },
    // 定义show和hide函数，控制当前分类的二级分类显示和隐藏
    show(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide(state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  // 获取分类函数
  actions: {
    async getList({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 给每个分类加上控制二级分类显示隐藏的数据
      data.result.forEach(top => {
        top.open = false
      })
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}
