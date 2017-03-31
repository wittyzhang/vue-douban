// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Vuex from 'vuex'
// 引入mint-ui(此处为完整引入mint-ui)
// 亦可部分引入 部分引入需要借住 babel-plugin-component 详情参考：http://mint-ui.github.io/docs/#!/zh-cn2/quickstart
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import 'mint-ui/lib/style.css'
import './assets/css/main.css'
import './assets/js/flexible.js'
import './assets/js/util.js'
// 开启debug模式
Vue.config.debug = true

// 引入组件
import App from './App'
import readPage from './components/readPage'
import moviePage from './components/moviePage'
import movieDetail from './components/movieDetail'
import movieList from './components/movieList'
import readDetail from './components/readDetail'

// 定义vue路由、http请求、状态管理
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Vuex)
// Vue.use(MintUI)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  // mode: 'histoy',
  routes: [
    {
      path: '/',
      component: readPage
    },
    {
      path: '/readpage',
      component: readPage
    },
    {
      path: '/moviepage',
      component: moviePage
    },
    {
      path: '/moviepage/:id',
      name: 'm_detail',
      component: movieDetail
    },
    {
      path: '/movielist/:name',
      name: 'm_list',
      component: movieList
    },
    {
      path: '/readdetail/:id',
      name: 'r_detail',
      component: readDetail
    }
  ]
})

 // 现在我们可以启动应用了！
 // 路由器会创建一个App实例，并且挂在到选择符#app匹配的元素上
const routerApp = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

export default routerApp
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
