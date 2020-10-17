import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

//mock 开关
const mock = true;
if (mock) { 
  require('../mock/api')
}
axios.defaults.baseURL=env.baseURL

// vue.prototype.$store = store
// router.beforeEach((to, from, next) => {
//   //to and from are Route Object,next() must be called to resolve the hook}
//   console.log(store.state, "store.state");
//   if (store.state.userInfo || to.path == "/login") {
//     next()
//   } else {
//     next({
//       path: "/login"
//     })
//   }
// })

axios.interceptors.response.use(response => { 
  let res = response.data;
  // console.log(res);
  if (res.status == 0) {
    return res.data
  }else if (res.status == 10) {
    alert(res.msg);
  }
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')