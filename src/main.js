import Vue from 'vue'
import { Tag } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css' //引入font-awesom图标库

// vant组件
import {
  ActionSheet,
  Button,
  Row,
  Col,
  NavBar,
  Toast,
  Tabbar,
  TabbarItem,
  Loading,
  Icon,
  PullRefresh,
  Image,
  Lazyload,
  Popup,
  Skeleton,
  Panel,
  Search,
  Tab,
  Tabs,
  CouponCell
} from 'vant'

// 全局注册
Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(NavBar)
  .use(Toast)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Loading)
  .use(Popup)
  .use(ActionSheet)
  .use(Icon)
  .use(PullRefresh)
  .use(Image)
  .use(Lazyload)
  .use(Skeleton)
  .use(Panel)
  .use(Search)
  .use(Tab)
  .use(Tabs)
  .use(CouponCell)

Vue.use(Tag)

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
