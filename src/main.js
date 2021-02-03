import Vue from 'vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {routes} from './routes';

Vue.config.productionTip = false
Vue.use(VueRouter);
vuetify.use(axios)
const router=new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
