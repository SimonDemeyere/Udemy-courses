import Vue from 'vue';
import App from './App';

import Header from './components/header_footer/Header';

Vue.component('compHeader', Header);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
