<template>
  <div>
    <h1>App 根组件</h1>
    <!-- 1.1 使用模块A的username -->
    <p>{{ $store.state.moduleA.username }}</p>
    <!-- 1.2 使用A模块getters的数据 -->
    <p>{{ $store.getters.newName }}</p>
    <!-- 2.1 使用模块B的username -->
    <p>{{ $store.state.moduleB.username }}</p>
    <!-- 2.2 使用B模块getters的数据 -->
    <p>{{ $store.getters['moduleB/newName'] }}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
// 可以通过调用 useStore 函数，来在 setup 钩子函数中访问 store
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const mutationsFn = () => {
      // 2.3 提交B模块的修改
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      store.dispatch('moduleB/updateName')
    }
    return { mutationsFn, actionsFn }
  }
}
</script>

<style lang="less" scoped></style>
