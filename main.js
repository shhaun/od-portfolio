import Vue from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
