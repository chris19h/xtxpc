<template>
  <div>
    <h1>App 根组件</h1>
    <!-- 1. 使用根模块state的数据   -->
    <p>{{ $store.state.username }}</p>
    <!-- 2. 使用根模块getters的数据 -->
    <p>{{ $store.getters.newName }}</p>
    <button @click="mutationsFn">改名字</button>
  </div>
</template>

<script>
// 可以通过调用 useStore 函数，来在 setup 钩子函数中访问 store
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    // 1. 使用根模块state的数据
    const store = useStore()
    console.log(store.state.username)
    // 2. 使用根模块getters的数据
    console.log(store.getters.newName)
    // 3. 提交根模块mutations函数
    // 要使用 mutation 和 action 时，只需要在 setup 钩子函数中调用 commit 和 dispatch 函数。
    const mutationsFn = () => {
      // store.commit('updateName')
      // 4. 调用根模块actions函数
      store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}
</script>

<style lang="less" scoped></style>
