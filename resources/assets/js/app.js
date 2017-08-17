require('./vendor');
require('./app/semantic-ui-tablesort');
require('./app/custom');

window.NProgress = require('nprogress');
NProgress.configure({ showSpinner: false, trickleSpeed: 1000, easing: 'ease', speed: 500, minimum: 0.3 });

// Vue Sweet alert - https://github.com/lishengzxc/vue-sweetalert
import VueSweetAlert from 'vue-sweetalert';
Vue.use(VueSweetAlert);

// Toast Notification - https://github.com/shakee93/vue-toasted
import Toasted from 'vue-toasted';
Vue.use(Toasted, {position: 'bottom-right', duration: 3000});

// Global Component
Vue.component('example', require('./components/Example.vue'));

// Register a global custom directive called v-tablesort
Vue.directive('tablesort', {
  inserted: function (el) {
    $(el).tablesort();
  }
});

// Register a global custom directive called v-dropdown
Vue.directive('modal', {
  inserted: function (el) {
    $(el).modal('setting', { detachable: false, autofocus: true, closable: false, transition: 'fade' }).modal('show').addClass('scrolling active');
  }
});

// Importing Routes from the router.js file
import router from './routes';

// Load the component where id = 'app'
window.onload = () => {
  if (document.getElementById("app")) {
  	const app = new Vue({
  	    el: '#app',
        router
  	});
  }
}
