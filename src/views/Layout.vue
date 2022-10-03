<template>
  <!-- 顶部通栏 -->
  <nav>顶部通栏</nav>
  <!-- 头部组件 -->
  <header>头部组件</header>
  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view></router-view>
    <!-- 底部组件 -->
  </div>
  <footer>底部组件</footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped></style>
