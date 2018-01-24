// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import { Dropdown, Icon } from 'iview';
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', Dropdown.Menu);
Vue.component('DropdownItem', Dropdown.Item);
Vue.component('Icon', Icon);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
