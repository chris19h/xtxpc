<template>
  <!-- 顶部通栏 -->
  <AppNavbar></AppNavbar>
  <!-- 头部组件 -->
  <AppTopnav></AppTopnav>
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
    <!-- 底部组件 -->
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppTopnav from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppTopnav,
    AppFooter
  },
  // 获取下分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
    // 调用 src\store\modules\category.js actions
  }
}
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
