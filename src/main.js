import Vue from 'vue'
import App from './App.vue'
import ToDoPlugin from './plugins/todoPlugin';

Vue.config.productionTip = false

// Встановлений плагін
Vue.use(ToDoPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
