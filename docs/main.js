// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/common.css'
import DemoBlock from './components/demo-block'
import MButton from 'vue-m-button'
import 'vue-m-button/dist/css/default.css'
import MInput from '@/index'
import loader from '@/loader'


loader({
  url: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
  library: 'jQuery'
}).then($ => {
  console.log('1', $)
}).catch(err => {
  console.log(err)
})

loader({
  url: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
  library: 'jQuery'
}).then($ => {
  console.log('2', $)
}).catch(err => {
  console.log(err)
})

loader({
  url: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
  library: 'jQuery'
}).then($ => {
  console.log('3', $)
}).catch(err => {
  console.log(err)
})


Vue.use(MButton)
Vue.use(MInput)
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
