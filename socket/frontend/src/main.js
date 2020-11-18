import Vue from 'vue'
import App from './App.vue'


import io from 'socket.io-client';
const socket = io('http://localhost:3001');
Vue.prototype.$socket = socket;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')