// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/common.css'
import DemoBlock from './components/demo-block'
import MButton from 'vue-m-button'
import 'vue-m-button/dist/css/default.css'
import MLoader from '@/index'
import loader from '@/loader'


loader({
  url: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
  library: 'jQuery'
}).then(library => {
  console.log('1', library.target)
}).catch(err => {
  console.log(err)
})


Vue.use(MButton)
Vue.use(MLoader)
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
