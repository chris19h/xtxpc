<template>
  <div class="container">
    <!-- 修改数据，测试是否持久化 -->
    <h1>App 根组件 --- {{ $store.state.user.profile.account }}</h1>
    <button @click="$store.commit('user/setUser', { account: 'zs' })">设置用户信息</button>
    <hr />
    <button @click="fn">测试request请求</button>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'App',
  setup() {
    const fn = () => {
      request('/member/profile', 'get', { a: 10 })
    }
    return { fn }
  }
}
</script>

<style lang="less" scoped></style>
