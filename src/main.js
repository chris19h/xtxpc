import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自己UI组件库
import UI from '@/components/library/index.js'

import 'normalize.css'
import '@/assets/style/common.less'

// 创建一个vue应用实例
createApp(App).use(store).use(router).use(UI).mount('#app')
